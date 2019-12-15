import React from 'react';
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
  <div>
   <h2>Volunteer Admin</h2>
   {selectedSessionContent}
    
   <SessionList
    sessionList={props.sessionList}
    onSessionSelection={props.onSessionSelection}
    //  currentRouterPath={props.currentRouterPath} 
   />
   <SessionForm onSessionSubmit={props.onSessionSubmit}
    onSessionSelection={props.onSessionSelection}/>

  </div>
      
      
 );

 
}

export default VolunteerAdmin;