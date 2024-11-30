import React from 'react';
import '../AccountLogIn/AccountLogIn.css';

function AccountCreation() {
  return <div>
        <div className='mainContainer'>
      <div>
        <h1> Create  an account</h1>
      </div>
      <div className='row'>
        <input name="Email" id="Email" className="email-input" placeholder="Email" />
      </div>
      <div className='row'>
        <input name="Username" id="Username" className="username-input" placeholder="Username" />
      </div>
      <br/>
      <div className='row'>
        <input type="password" name="Password" id="Password" className="password-input" placeholder="password" />
      </div>
      <br/>
      <div class='row'>
        <div class='col-md'>    
        <a href='/Succesful'className='navbar-btn navbar-btn-hover' role="button">Confirm</a>
        </div>
    </div>
    </div>
  </div>;
}

export default AccountCreation;
