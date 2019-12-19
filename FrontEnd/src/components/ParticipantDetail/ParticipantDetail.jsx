import React from 'react';
import { v4 } from 'uuid';
import ParticipantList from './../ParticipantList/ParticipantList';
// import {Redirect} from 'react-router-dom';

function ParticipantDetail(props) {
 let _firstName = null;
 let _lastName = null;
         
    
 function addNewParticipant(event){
  event.preventDefault();
  props.onAddingNewParticipant({firstName: _firstName.value, lastName: _lastName.value, id: v4()});

  _firstName.value = '';
 _lastName.value='';
 }

 

  
 
  
 return (
  <div className="jumbotron">
   <h4>{props.selectedSession.name}</h4>
   <h5>Name: {props.selectedSession.description}</h5>
   <h5>Location:{props.selectedSession.dates}</h5>
   <h5>Openings:{props.selectedSession.openings}</h5>
   <p>________________________</p>
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
    <button type='submit'>Add Participant</button>
   </form>

        
  </div>
 );
} 



export default ParticipantDetail;