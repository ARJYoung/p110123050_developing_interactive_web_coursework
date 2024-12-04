import React from 'react';
import electric from '../../Images/electric.jpg';

function ElectricCherry() {
  return <div>
        <h1>Electric Cherry</h1>
    <div class="row">
      <div class="col-md">
<p> Your mag is low, throw
  it out, with this perk it'll flow
  <br/>
  electric cherry zaps those around, dropping to the ground
  drink the drink and the zombies'll think the think
  zip zap, cherry so sour, reload quick, they'll feel the power
</p>
      </div>
      <div class="col-md">
      <img src={electric} className='image'/>
      </div>
      <div class="col-md">
        
<p>A strong blend of sour cherry, a hint of lemon and a kick of 115 volts, coursing through your veins
  Use those bullets until you're empty, the closer to the end, will bring the zombies end instead.
  Electric cherry will shock first time drinkers </p>
      </div>
      </div>

    <br/>
  </div>;
}

export default ElectricCherry;
