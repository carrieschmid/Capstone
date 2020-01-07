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
    <div className = "col col-md-7">
    <SessionList
    sessionList={props.sessionList}
    onSessionSelection={props.onSessionSelection}
    onCloseDetails={props.onCloseDetails}
   />
   </div>
    <div className = "col col-md-5">
   {selectedSessionContent}
   </div>
  </div>
      
      
 );

}


export default ParticipantAdmin;