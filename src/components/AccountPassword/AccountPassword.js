import React from 'react';
import '../AccountLogIn/AccountLogIn.css';

function AccountPassword() {
  return <div>

<div className='mainContainer'>
      <div>
        <h1> Change Password</h1>
      </div>
      <div className='row'>
        <input type="password" name="passwordChange" id="passwordChange" className="password-input" placeholder="Enter new password" />
      </div>
      <br/>
      <div className='row'>
        <input type="password" name="PasswordConfirm" id="PasswordCofirm" className="password-input" placeholder="Confirm new password" />
      </div>
      <br/>
      <div class='row'>
        <div class='col-md'>    
        <a href='/Password'className='navbar-btn navbar-btn-hover' role="button">Confirm</a>
        </div>
        <br/>
        <br/>
    </div>
    </div>
  </div>;
}

export default AccountPassword;
