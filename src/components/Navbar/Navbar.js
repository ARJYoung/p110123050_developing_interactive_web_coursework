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
          <div class="row">
            <div className='col-sm'>
            <a href='/About'className='navbar-btn navbar-btn-hover' role="button">About us</a>
            </div>
            <br/>
            <br/>
            <div className='col-sm'>
            <a href='/Products'className='navbar-btn navbar-btn-hover' role="button">Perk a Colas</a>
            </div>
            <br/>
            <br/>
            <div className='col-sm'>
            <a href='/Creator'className='navbar-btn navbar-btn-hover' role="button">Creator</a>
            </div>
            <br/>
            <br/>
            <div className='col-sm'>
            <a href='/FAQ'className='navbar-btn navbar-btn-hover' role="button">Help</a>
            </div>
            <br/>
            <br/>
            <div className='col-sm'>
            <a href='/Chat'className='navbar-btn navbar-btn-hover' role="button">Chat</a>
            </div>
            <br/>
            <br/>
            <div className='col-sm'>
            <a href='/Login'className='navbar-btn navbar-btn-hover' role="button">Login</a>
            </div>
            <br/>
            <br/>
          </div>
        </div>
      </div>
  )
}

export default Navbar;
