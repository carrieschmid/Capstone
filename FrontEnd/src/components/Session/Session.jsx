import React from 'react';
// import VolunteerDetail from './VolunteerDetail';
// import ParticipantDetail from './ParticipantDetail';

// import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Session(props){

 function handleDetails(){
  props.onSessionSelection(props.sessionId);
 }

 function closeDetails(){
     props.onCloseDetails(props.sessionId);
 }

 const sessionInformation =
  <div className= "jumbotron">  
   <h5> {props.name}</h5>
   <ul>
    <li className="list-group-item">Description: {props.description}</li>
    <li className="list-group-item">Location: {props.location}</li>
    <li className="list-group-item">Openings: {props.openings}</li>
    <li className="list-group-item"> Dates: {props.dates}</li>
    {/* <li className="list-group-item">Lesson: {props.lessons}</li>
    <li className="list-group-item">Participants: {props.participant}</li> */}
 
    <button onClick={handleDetails}>See Details</button>
    <button onClick={closeDetails}>Close Details</button>

    
   </ul>
  </div>;

 
 return (
  <div>
   {sessionInformation}
  </div>
 );
}

//  if (props.currentRouterPath === '/volunteer-admin'){
//   return (
//     <div>
//     {sessionInformation}
//     <VolunteerDetail/>
//     </div>
//   );
//  } else {
//   return (
//     <div>
//     {sessionInformation}
//     <ParticipantDetail/>
//     </div>
//   );
//  }
// }




export default Session;