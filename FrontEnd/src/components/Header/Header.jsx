import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import openhouse from './openhouse.jpg';

function Header() {

 return (
    <div>
  <div className='Nav'> 
   <Link to="/">Home</Link> | <Link to="/add-acct">Create Account</Link> | <Link to="/login">Login</Link> | <Link to="/volunteer-admin">Vol Admin</Link>     
  </div>
  <div class="Holder">
    <div className="Image">
    
    <h1 className="Title">OpenHouse</h1>
    </div>
    {/* <img src= {openhouse}/> */}
   
    </div>
    </div>
      
 );
}
  

export default Header
;