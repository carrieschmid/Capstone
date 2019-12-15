import React from 'react';
import { v4 } from 'uuid';
import LessonList from './../LessonList/LessonList';
// import {Redirect} from 'react-router-dom';

function VolunteerDetail(props) {
 let _morning = null;
 let _snack = null;
 let _afternoon = null;        
    
 function addNewLesson(event){
  event.preventDefault();
  props.onAddingNewLesson({morning: _morning.value, snack: _snack.value, afternoon: _afternoon.value});
 }
       


 //  if(props.selectedSession){
 //   let session = props.sessionList[props.selectedSession]; 

 return (
  <div>
   <h1>{props.selectedSession.name}</h1>
   <p>Description: {props.selectedSession.description}</p>
   <p>Dates:{props.selectedSession.dates}</p>
   <p>Openings:{props.selectedSession.openings}</p>
   <LessonList lessonList={props.selectedSession.lessons}/>
   <form onSubmit={addNewLesson}>
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
      placeholder='snack'
      ref={(input) => { _snack = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='afternoon'
      type='text'
      placeholder='afternoon'
      ref={(input) => { _afternoon = input; }} />
    </div>
    <button type='submit'>Add Lesson</button>
   </form>



        
  </div>
 );

} 






export default VolunteerDetail;