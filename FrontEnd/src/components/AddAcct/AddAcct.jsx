import React from 'react';



function AddAcct(props) {

 let _username = null;
 let _password = null;

 function handleCreateAcct(event){
  event.preventDefault();
  props.onCreateAcct({Username: _username.value, Password: _password.value});
  _username = '';
  _password = '';
 }

 return (
   
  <div className='Preview'>
   <form onSubmit={handleCreateAcct}>
    <div className='input-field'>
     <input
      type='text'
      placeholder='User ID'
      ref={(input) => { _username = input; }}
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