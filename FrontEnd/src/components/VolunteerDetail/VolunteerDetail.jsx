import React from 'react';
import { v4 } from 'uuid';
import LessonList from './../LessonList/LessonList';
import './VolunteerDetail.css';
// import {Redirect} from 'react-router-dom';

function VolunteerDetail(props) {
  let _date = null;
  let _morning = null;
 let _snack = null;
 let _afternoon = null;   
 
 
function addNewLesson(event){
  event.preventDefault();
  props.onAddingNewLesson({date:_date.value, morning: _morning.value, snack: _snack.value, afternoon: _afternoon.value});
 _date.value = '';
 _morning.value='';
 _snack.value='';
 _afternoon.value='';
 }

 


// function handleCloseDetails(){
//   props.onSessionSelection(props.sessionId);
//  }
       



 //  if(props.selectedSession){
 //   let session = props.sessionList[props.selectedSession]; 

 return (
  
  <div className= 'jumbotron'>
   <h4>{props.selectedSession.name}</h4>
   <h5>Description: {props.selectedSession.description}</h5>
   <h5>Dates:{props.selectedSession.dates}</h5>
   <h5>Openings:{props.selectedSession.openings}</h5>
   <div>
   <p>_________________________</p>
   </div>

   <LessonList lessonList={props.selectedSession.lessons}/>
   
   <form onSubmit={addNewLesson}>
    <div className='input-field'>
    <input
      id='date'
      type='text'
      placeholder='Date'
      ref={(input) => { _date = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='morning'
      type='text'
      placeholder='Morning'
      ref={(input) => { _morning = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='snack'
      type='text'
      placeholder='Snack'
      ref={(input) => { _snack = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='afternoon'
      type='text'
      placeholder='Afternoon'
      ref={(input) => { _afternoon = input; }} />
    </div>
    <button type='submit'>Add Lesson</button>
   </form>
  

   

        
  </div>
 );

} 






export default VolunteerDetail;