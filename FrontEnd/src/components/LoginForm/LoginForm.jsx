import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {

 let _username = null;
 let _password = null;

 function handleLogin(event) {
  console.log('handle login running');
  event.preventDefault();
  props.onLogin({ Username: _username.value, Password: _password.value });
  _username = '';
  _password = '';
 }

 var loginBtn = {
  textAlign: 'center',
  marginTop: '20px'
 };
 var loginBtnStyle = {
  backgroundColor: 'blue',
 };

 return (
  <div>
   <form onSubmit={handleLogin}>
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
    <div style={loginBtn}>
     <button type='submit' style={loginBtnStyle}>Log in</button>
    </div>
   </form>
  </div>
 );
}

// console.log('Current user: ', props.currentUser);
// function clickLogout() {
//   props.onLogout();
// }

// let signInOut = <Link to='/sign-in'>Sign In</Link>;

// if (props.currentUser)
// {
//   signInOut = <Link onClick={clickLogout} to='/sign-in'>Sign Out</Link>;
// }

LoginForm.propTypes = {
 onLogin: PropTypes.func
};

export default LoginForm;