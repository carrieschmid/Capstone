import React from 'react';
import './VolunteerAdmin.css';
import SessionForm from './../SessionForm/SessionForm';
import SessionList from './../SessionList/SessionList';
import VolunteerDetail from './../VolunteerDetail/VolunteerDetail';



function VolunteerAdmin(props) {

 let selectedSessionContent = null;
 if (props.selectedSession != null){
  selectedSessionContent =  <VolunteerDetail selectedSession={props.sessionList[props.selectedSession]} onAddingNewLesson = {props.onAddingNewLesson} />;
  // console.log(onAddingNewLesson);
 }

 return (
  <div className= "container">
   <div className = "row">  
      <SessionForm className= "FormWrapper" onSessionSubmit={props.onSessionSubmit}
        onSessionSelection={props.onSessionSelection}/>
  </div>

  <div className= "row">
    <div className= "col col-md-8">
      <div className ="ListWrapper">
        <SessionList
          sessionList={props.sessionList}
          onSessionSelection={props.onSessionSelection}
          onCloseDetails={props.onCloseDetails}
          //  currentRouterPath={props.currentRouterPath}
        />
      </div>
    </div>
    <div className= "col col-md-4">
      {selectedSessionContent}
    </div>
  </div>
</div>
      
      
 );

 
}

export default VolunteerAdmin;