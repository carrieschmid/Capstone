import React from 'react';
import Participant from './../Participant/Participant';

function ParticipantList(props){
 console.log(props.participantList);
 return(
  <div>
   {props.participantList.map((thisParticipant, index)=>
    <Participant
     firstName= {thisParticipant.firstName}
     lastName= {thisParticipant.lastName}
     //   parentName= {thisParticipant.parentName}
     key={index}/>)}
  </div>
 );
}




export default ParticipantList;