import React from 'react';
import jugger from '../../Images/jugger.jpg';
function Juggernog() {
  return <div>
      <h1>Juggernog</h1>
    <div class="row">
      <div class="col-md">
<p> When you need some help to get by
  <br/>
Something to make you feel strong
<br/>
Reach for Juggernog tonight
<br/>
Sugar seduction delight!
<br/>
When you need to feel big and strong
<br/>
Reach for Juggernog tonight!</p>
      </div>
      <div class="col-md">
      <img src={jugger} className='image'/>
      </div>
      <div class="col-md">
        
<p>
  Your taste buds may find this drink sweet in taste, 
  <br/>
  but eggy in texture
  <br/>
  This drink will give you thicker skin, allowing more damage to be taken
  <br/>
  It will NOT make you immortal, 
  <br/>
  I'm looking at you Richtofen...

   </p>
      </div>
      </div>

    <br/>
  </div>;
}

export default Juggernog;
