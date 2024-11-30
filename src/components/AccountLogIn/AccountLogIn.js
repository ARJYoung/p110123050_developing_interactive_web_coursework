import React from 'react';
import '../AccountLogIn/AccountLogIn.css';
import '../Navbar/Navbar.css';

function AccountLogIn() {

  return (
    <div className='mainContainer'>
      <div>
        <h1> Log in</h1>
      </div>
      <div className='row'>
        <input name="Email" id="Email" className="email-input" placeholder="Email" />
      </div>
      <br/>
      <div className='row'>
        <input type="password" name="Password" id="Password" className="password-input" placeholder="password" />
      </div>
      <br/>
      <div class='row'>
        <div class='col-md'>    
        <a href='/AccountSuccesful'className='navbar-btn navbar-btn-hover' role="button">Login</a>
        </div>
        <div class='col-lg'>
      <a href='/AccountPassword'>Forgotten password</a>
    </div>
    </div>
    </div>
  )
}

export default AccountLogIn;
