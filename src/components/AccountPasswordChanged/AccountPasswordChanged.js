import React from 'react';
import '../AccountLogIn/AccountLogIn.css';

function AccountPasswordChanged() {
  return <div>
    <div className='mainContainer'>
    <h1>Password change succesful</h1>
    <br/>
    <p> Please login</p>
    <div class='row'>
        <div class='col-md'>
          <br/>
          <br/>    
        <a href='/LogIn'className='navbar-btn navbar-btn-hover' role="button">Login</a>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        </div>
  </div>;
}

export default AccountPasswordChanged;
