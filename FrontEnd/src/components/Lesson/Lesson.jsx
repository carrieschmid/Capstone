import React from 'react';

function Lesson(props){
    
 return(
  <div>
    <p>Date: {props.date}</p> 
   <p>Morning: {props.morning}</p> 
   <p>Snack: {props.snack}</p>
   <p>Afternoon: {props.afternoon}</p>
   <button onClick={props.onCloseDetails}>Close Lesson</button>
  </div>  
  
 );
}

export default Lesson;