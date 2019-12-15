import React from 'react';
import Lesson from './../Lesson/Lesson';

function LessonList(props) {
 console.log(props.lessonList);
 return(
  <div>
   {props.lessonList.map((thisLesson, index) =>
    <Lesson 
     morning={thisLesson.morning}
     snack={thisLesson.snack}
     afternoon={thisLesson.afternoon}
     key={index} 
    />

    // <p>Morning: {props.morning}</p> 
    // <p>Snack: {props.snack}</p>
    // <p>Afternoon: {props.afternoon}</p>  
   )}
  </div>
 );
}



export default LessonList;