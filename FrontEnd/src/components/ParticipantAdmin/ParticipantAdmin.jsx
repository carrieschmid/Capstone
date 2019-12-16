import React from 'react';
import SessionList from './../SessionList/SessionList';
import ParticipantDetail from './../ParticipantDetail/ParticipantDetail';

function ParticipantAdmin(props) {
 let selectedSessionContent = null;
 if (props.selectedSession != null){
  selectedSessionContent =  <ParticipantDetail selectedSession={props.sessionList[props.selectedSession]} 
   onAddingNewParticipant = {props.onAddingNewParticipant}/>;

 }



 return (
  <div className="row">
    <div className = "col col-md-8">
    <SessionList
    sessionList={props.sessionList}
    onSessionSelection={props.onSessionSelection}
   />
   </div>
    <div className = "col col-md-4">
   {selectedSessionContent}
   </div>
  </div>
      
      
 );

}


export default ParticipantAdmin;