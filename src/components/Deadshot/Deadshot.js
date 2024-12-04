import React from 'react';
import deadshot from '../../Images/deadshot.jpg';


function Deadshot() {
  return <div>
    <h1>Deadshot</h1>
    <div class="row" className='text'>
      <div class="col-md">
<p> To error is human, to forgive is divine
Well I'm not forgivin' and the error ain't mine
They ain't quite human
At least they're not to my eyes
One sip of this and I'll give 'em the shock of their lives
Yea, we got the guns and we got the bombs
In deadshot heaven we pop, skulls for fun
Zero in baby, zero on that spot
The hot spot baby, give 'em, all you got
So quit, complainin'
About your bad aimin
Just try, try again for me
With the headshot power of deadshot daiquiri!</p>
      </div>
      <div class="col-md">
      <img src= {deadshot} className="image"/>
      </div>
      <div class="col-md">
        
<p>A strawberry infused cocktail styled drink, with no additives or alcohol involved.
  This beverage will increase your aim, connecting your eye and weapon to the head of an enemy.
  A trusty perk for those who need a power boost and those who want to get range between you and them.
  Don't let those meatsacks intimidate you with those glowing eyes, you aim up, they go down. </p>
      </div>
      </div>

    <br/>

  </div>;
}

export default Deadshot;
