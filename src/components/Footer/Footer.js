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
        <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=17%20Toftland,%20Orton%20Malborne,%20Peterborough,%20PE2%205PE+(Perk-A-Colas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div class="col-md">
        <br/>
        <ul><a href='/FAQs' class="item item-hover">FAQ</a></ul>
        <br/>
        <ul><a href='/TAndC' class="item item-hover">T&Cs</a></ul>
        <br/>
        <ul><a href='/Products' class="item item-hover">Products</a></ul>
      </div>
      </div>
    </div>
  )
}

export default Footer;
