import React from 'react';
import './Navbar.css';
import Search from '../Search/Search';
import burningflamessoda from '../../Images/burningflamessoda.png';

function Navbar() {
  
  return (
    <div className='background'>
        <div class ="row">
          <div class="col-sm">
          <a href='/'>
            <img src={burningflamessoda} className='image'/>
          </a>
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
            <a href='/FAQs'className='navbar-btn navbar-btn-hover' role="button">Help</a>
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
