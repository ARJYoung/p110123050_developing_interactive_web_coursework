import React from 'react';
import './Navbar.css';
import Search from '../Search/Search';

function Navbar() {
  return (
    <div className='background'>
        <div class ="row">
          <div class="col-sm">
            Logo goes here
          </div>
          <div class="col-sm">
            <Search/>
          </div>
          <div class="col-md">
            <a href='/About'className='navbar-btn navbar-btn-hover' role="button">About us</a>
            <a href='/Products'className='navbar-btn navbar-btn-hover' role="button">Perk a Colas</a>
            <a href='/Creator'className='navbar-btn navbar-btn-hover' role="button">Creator</a>
            <a href='/FAQ'className='navbar-btn navbar-btn-hover' role="button">Help</a>
            <a href='/Chat'className='navbar-btn navbar-btn-hover' role="button">Chat</a>
          </div>
        </div>
      </div>
  )
}

export default Navbar;
