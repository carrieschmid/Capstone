import React from 'react';
import Lesson from './../Lesson/Lesson';

function LessonList(props) {
 console.log(props.lessonList);
 return(
  <div>
   {props.lessonList.map((thisLesson, index) =>
    <Lesson 
    date={thisLesson.date}
     morning={thisLesson.morning}
     snack={thisLesson.snack}
     afternoon={thisLesson.afternoon}
     key={index} 
    />
   )}
  </div>
 );
}



export default LessonList;