import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div class="background_footer">
      <div class="row">
      <div class="col-md">
        <h2>Contact information</h2>
        <p>Email</p>
        <p>Phone</p>
      </div>
      <div class="col-md">
        <ul><a href='/FAQ' class="item item-hover">FAQ</a></ul>
        <ul><a href='/TAndC' class="item item-hover">T&Cs</a></ul>
        <ul><a href='/Products' class="item item-hover">Products</a></ul>
      </div>
      </div>
    </div>
  )
}

export default Footer;
