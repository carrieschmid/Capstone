import React from 'react';
import { v4 } from 'uuid';
import ParticipantList from './../ParticipantList/ParticipantList';
import {Redirect} from 'react-router-dom';

function ParticipantDetail(props) {
 let _firstName = null;
 let _lastName = null;
 let _parentName = null;        
    
 function addNewParticipant(event){
  event.preventDefault();
  props.onAddingNewParticipant({firstName: _firstName.value, lastName: _lastName.value, parentName: _parentName.value, id: v4()});
 }

 // //  function deleteParticipant(event){
    
 // //  }

  
 
  
 return (
  <div>
   <h1>{props.selectedSession.name}</h1>
   <p>Description: {props.selectedSession.description}</p>
   <p>Dates:{props.selectedSession.dates}</p>
   <p>Openings:{props.selectedSession.openings}</p>
   <ParticipantList participantList={props.selectedSession.participants}/>
   <form onSubmit={addNewParticipant}>
    <div className='input-field'>
     <input
      id='firstName'
      type='text'
      placeholder='First Name'
      ref={(input) => { _firstName = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='lastName'
      type='text'
      placeholder='Last Name'
      ref={(input) => { _lastName = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='parentName'
      type='text'
      placeholder='Parent Name'
      ref={(input) => { _parentName = input; }} />
    </div>
    <button type='submit'>Add Participant</button>
   </form>

        
  </div>
 );
} 



export default ParticipantDetail;