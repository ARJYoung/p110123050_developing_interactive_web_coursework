import React from 'react';

function AccountSuccesful() {
  return <div>
    <h2>Login succesful</h2>
    <p> What would you like to do next?</p>
    <a href='/Chat'className='navbar-btn navbar-btn-hover' role="button">Chat</a>
    <br/>
    <br/>
    <br/>
    <a href='/Products'className='navbar-btn navbar-btn-hover' role="button">Shop products</a>
    <br/>
    <br/>
  </div>;
}

export default AccountSuccesful;
