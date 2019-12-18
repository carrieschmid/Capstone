import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

 return (
    <div>
  <div className='Nav'> 
   <Link to="/">Home</Link> |<Link to="/add-acct">Create Account</Link>|<Link to="/login">Login</Link> | <Link to="/volunteer-admin">Vol Admin</Link>     
  </div>
    <div className="Header">
   <h3>OpenHouse</h3>
    </div>
    </div>
      
 );
}
  

export default Header
;