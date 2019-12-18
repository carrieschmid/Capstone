import React from 'react';



function AddAcct(props) {

 let _email = null;
 let _password = null;

 function handleCreateAcct(event){
  event.preventDefault();
  props.onCreateAcct({Email: _email.value, Password: _password.value});
  _email = '';
  _password = '';
 }

 return (
   
  <div className='Preview'>
   <form onSubmit={handleCreateAcct}>
    <div className='input-field'>
     <input
      type='text'
      placeholder='Email'
      ref={(input) => { _email = input; }}
     />
    </div>
    <div className='input-field'>
     <input
      type='password'
      placeholder='Password'
      ref={(input) => { _password = input; }}
     />
    </div>
    <div>
     <button type='submit'>Create Account</button>
    </div>
   </form>
  </div>
 );
}



export default AddAcct;