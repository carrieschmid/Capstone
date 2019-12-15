import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

 return (
      
  <div className='Header'>
     
   <Link to="/">Home</Link> |<Link to="/add-acct">Create Account</Link>|<Link to="/login">Login</Link> | <Link to="/volunteer-admin">Vol Admin</Link>
   
  
        
  </div>
      
 );
}
  

export default Header
;