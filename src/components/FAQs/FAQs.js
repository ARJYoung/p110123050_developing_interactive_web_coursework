import React from 'react';
import '../FAQs/FAQs.css';
function FAQs() {
  return <div>
    <div className='container'>
      <h1>Frequently Asked Questions</h1>
      <br/>
      <div class="row">
        <div class="col-md">
          <h2> Common Questions</h2>
          <h4> How many products do you sell?</h4>
          <p> We sell a lot of products that can be used in game </p>
          <br/>

        </div>
        <div class="col-md">
          <h2> In Game</h2>
          <h4>Can I use the drinks in game</h4>
          <p>In short YES. Like all drinks in the game</p>
          <p>your character can use the drink and gain perks</p>
          <br/>
          <h4>What happens to the drinks in my character dies?</h4>
          <p>If your character dies and is immediately revied</p>
          <p>then your character can continue using the perks</p>
        </div>
      </div>
    </div>
  </div>;
}

export default FAQs;
