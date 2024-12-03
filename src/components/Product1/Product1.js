import React from 'react';
import deadshot from '../../Images/deadshot.jpg'
import '../Product1/Product.css'

function Product1() {
  return <div>
    <h1>Deadshot</h1>
    <div class="row">
      <div class="col-md text">
<p>To error is human, to forgive is divine
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
With the headshot power of deadshot daiquiri! </p>
      </div>
      <div class="col-md">
      <img src={deadshot} className='image'/>
      </div>
      <div class="col-md text">
        
<p>A strawberry infused daiquiri boosted with unearthly elements.
   To give your shooting eye a better perspective
   when fighting the hoards.
   This handy beverage will have your eyes dart to the heads of those who oppose.
    you get up, they go down. 
    Only available certain parts of the USA, Siberia Germany, Japan, Poland, Vietnam, Urzikstan The Moon, Russia and Agartha
    </p>
      </div>
      </div>

    <br/>
  </div>;
}

export default Product1;
