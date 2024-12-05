import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div class="background_footer">
      <div class="row">
      <div class="col-md">
        <h2>Contact information</h2>
        <p>Email: montykeeper@agartha.com</p>

        <p>Phone: 1-377-907-7330</p>
      </div>
      <div class="col-md">
      <div>
        <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Burgstra%C3%9Fe%202,%205450%20Werfen,%20Austria+(Burg%20Hohenwerfen)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className='map'> </iframe>
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
    </div>
  )
}

export default Footer;
