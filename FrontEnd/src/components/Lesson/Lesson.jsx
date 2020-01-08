import React from 'react';
import LessonControl from './../LessonControl/LessonControl';

function Lesson(props){
  
    
 return(
  <div>
    <p>Date: {props.date}</p> 
   <p>Morning: {props.morning}</p> 
   <p>Snack: {props.snack}</p>
   <p>Afternoon: {props.afternoon}</p>

   {/* <LessonControl lessonList={props.selectedSession.lessons}/> */}

   <p>_______________________</p>
  </div>  
  
 );
 }


export default Lesson;