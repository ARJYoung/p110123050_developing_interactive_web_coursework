import React from 'react';
import '../AccountLogIn/AccountLogIn.css';

function AccountPasswordChanged() {
  return <div>
    <h1>Password change succesful</h1>
    <p> Please login</p>
    <div class='row'>
        <div class='col-md'>    
        <a href='/LogIn'className='navbar-btn navbar-btn-hover' role="button">Login</a>
        </div>
        <br/>
        <br/>
        </div>
  </div>;
}

export default AccountPasswordChanged;
