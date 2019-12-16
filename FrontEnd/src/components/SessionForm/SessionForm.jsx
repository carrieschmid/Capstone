import React from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

function SessionForm (props){

 let _name = null;
 let _description = null;
 let _location = null;
 let _dates = null;
 let _openings = null;


 function handleSessionSubmit(event) {
  event.preventDefault();
  console.log('gothere');
  props.onSessionSubmit({ name: _name.value, description: _description.value, location: _location.value, dates: _dates.value, openings: _openings.value, lessons: [], participants: [],  
   // newUserId: props 
  });

  _name.value = '';
  _description.value = '';
  _location.value = '';
  _dates.values = '';
  _openings.value = '';
  
    
 }

  
 return (
  <div>
      
     
   <form className="form-group" onSubmit={handleSessionSubmit}>
   <h4>New Session Form</h4> 
    <div className='input-field'>
     <input
      id='name'
      type='text'
      placeholder='Name'
      ref={(input) => {_name = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='description'
      type='text'
      placeholder='Description'
      ref={(input) => {_description = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='location'
      type='text'
      placeholder='Location'
      ref={(input) => {_location = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='dates'
      type='text'
      placeholder='Dates'
      ref={(input) => {_dates = input; }} />
    </div>
    <div className='input-field'>
     <input
      id='openings'
      type='text'
      placeholder='Openings'
      ref={(input) => {_openings = input; }} />
    </div>
    <button type='submit'>Add Session</button>
   </form>
  </div>
    
 );

}





// SessionForm.propTypes = {
//   onSubmit: PropTypes.func,
//   currentUser: PropTypes.string
// };


export default SessionForm;