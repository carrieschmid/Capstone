import React from 'react';

function Lesson(props){
    
 return(
  <div>
   <p>Morning: {props.morning}</p> 
   <p>Snack: {props.snack}</p>
   <p>Afternoon: {props.afternoon}</p>
  </div>  
 );
}

export default Lesson;