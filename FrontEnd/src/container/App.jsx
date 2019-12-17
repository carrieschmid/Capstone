import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
// import Card from './../elements/Card/Card';
import Header from './../components/Header/Header';
import ApiHelper from './../ApiHelper.js';
import { v4 } from 'uuid';
import { cloneDeep } from 'lodash';
import LoginForm from './../components/LoginForm/LoginForm';
import VolunteerAdmin from './../components/VolunteerAdmin/VolunteerAdmin';
import ParticipantAdmin from './../components/ParticipantAdmin/ParticipantAdmin';
import AddAcct from './../components/AddAcct/AddAcct';
// import Card from './../elements/Card/Card';


// import Footer from '../../components/Footer/Footer';




class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   masterSessionList: {},
   masterUserList:{},
   selectedSession: null,
   currentUser: '', 
   token: null,
   visibility: false
  };

  this.apiHelper = new ApiHelper();
  this.handleLogin = this.handleLogin.bind(this);
  this.handleCreateAcct = this.handleCreateAcct.bind(this);
  this.handleAddingNewSession = this.handleAddingNewSession.bind(this);
  this.handleChangingSelectedSession = this.handleChangingSelectedSession.bind(this);
  this.handleAddingNewLesson = this.handleAddingNewLesson.bind(this);
  this.handleAddingNewParticipant=this.handleAddingNewParticipant.bind(this);
  // this.handleAddingNewSessionToState = this.handleAddingNewSessionToState.bind(this);
 }

 handleAddingNewSession(newSession) {
  var newSessionId = v4();
  var newMasterSessionList = Object.assign({}, this.state.masterSessionList, {[newSessionId]: newSession});
  this.setState({ masterSessionList: newMasterSessionList });
  this.apiHelper.apiPostNewSession(newSession); 
  console.log(newMasterSessionList);

  }


 handleCreateAcct(newUser) {
  this.apiHelper.apiPostNewUser(newUser);
 }
  
 handleLogin(user) {
  let loginPromise = this.apiHelper.apiAttemptLogin(user);
  loginPromise.then((response) => {
   let parsedResponse = JSON.parse(response);
   console.log(parsedResponse);
   this.setState({currentUser: parsedResponse.volunteerId});
   this.setState({token: parsedResponse.token}); 
   console.log({currentUser: parsedResponse.volunteerId});     
  })
  // .then(() => {this.getSessionList();});  
 }

 getSessionList(){
  let dataPromise= this.apiHelper.apiGetVolunteerSessions(this.state.currentUser, this.state.token);
  dataPromise.then((response)=>{ let JSONresponse = JSON.parse(response);
   for (let i = 0; i < JSONresponse.length; i++){
   this.handleAddingNewProjectFromApi(JSONresponse[i]);
  
  }
});
}
  handleAddingNewProjectFromApi(newProject) {
  //  var newProjectId = v4();
  //   var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
  //     [newProjectId]: newProject
  //   });
  //   this.setState({ masterProjectList: newMasterProjectList });
  //   // this.apiPostNewProject(newProject); 
  //   console.log('--------', newProject);
  }
  
 
 

 //  handleAddingNewSessionToState(session){
 //   let sessionId = v4();
 //   let newMasterSessionList = Object.assign({}, this.state.masterSessionList, {[sessionId]: session });
 //   this.setState({masterSessionList: newMasterSessionList});
 //  }



 //   });
 //  }

 ////////////////////////////////////
  
 handleChangingSelectedSession(sessionId){
  this.setState({selectedSession: sessionId});
 }

 handleClosingDetails(){
   this.setState({selectedSession: null});
 }

//  toggleVisibility(){
//   if (this.state.visibility=true){
//    this.setState = ({ visibility: false});
//   }else{this.setState = ({visibility: true});
//   }
//  }


 handleAddingNewLesson(lesson) {
  const copyMasterSessionList = cloneDeep(this.state.masterSessionList);
  console.log(this.state.masterSessionList);
  copyMasterSessionList[this.state.selectedSession].lessons.push(lesson);
  this.setState({ masterSessionList: copyMasterSessionList }); 
 }

 handleAddingNewParticipant(participant) {
  const copyMasterSessionList = cloneDeep(this.state.masterSessionList);
  console.log(this.state.masterSessionList);
  copyMasterSessionList[this.state.selectedSession].participants.push(participant);
  this.setState({ masterSessionList: copyMasterSessionList });
  console.log(copyMasterSessionList); 
 }
  


 render() {


  
  return(
   <div className='AppWrapper' >  
    <Header /> 
    <div className='container'>
     <Switch>
      <Route exact path='/' render={() => <ParticipantAdmin sessionList={this.state.masterSessionList}
       selectedSession={this.state.selectedSession}
       onSessionSelection={this.handleChangingSelectedSession}
       onAddingNewParticipant= {this.handleAddingNewParticipant}
      />} 
      />
      <Route path='/login' render={() => <LoginForm
       onLogin={this.handleLogin} />} />
      
      <Route path='/volunteer-admin' render= {()=> 
       <VolunteerAdmin onSessionSubmit={this.handleAddingNewSession} 
        sessionList={this.state.masterSessionList}
        selectedSession={this.state.selectedSession}
        onSessionSelection={this.handleChangingSelectedSession}
        onCloseDetails={this.handleClosingDetails}
        onAddingNewLesson={this.handleAddingNewLesson}
        // currentRouterPath={props.location.pathname}
      
       /> } />
      
      <Route exact path='/add-acct' render={() =>  
       <AddAcct onCreateAcct={this.handleCreateAcct} />} />   
     </Switch>
    </div>
        
    {/* <Footer /> */}
   </div>


  );
 }
}

export default App;