import React from 'react';

function ConfirmationQuestions(props){

    var formStyle = {
        marginTop: '50px',
        marginLeft: '25px'
       };
 return (
  <div style = {formStyle}>
   <button onClick={props.onCloseLesson}>Close Lesson</button>
   {/* this is passed through from NewKegControl. the methos we need is housed in the prop */}
  </div>
 );
}

export default ConfirmationQuestions;