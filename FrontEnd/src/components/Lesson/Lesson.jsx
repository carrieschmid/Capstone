import React from 'react';

function Lesson(props){
  
    
 return(
  <div>
    <p>Date: {props.date}</p> 
   <p>Morning: {props.morning}</p> 
   <p>Snack: {props.snack}</p>
   <p>Afternoon: {props.afternoon}</p>
   <p>_______________________</p>
  </div>  
  
 );
 }


export default Lesson;