import React from 'react';
import deadshot from '../../Images/deadshot.jpg'
import '../Product1/Product.css'
function Product1() {
  return <div className='mainContainer'>
    <h1>Deadshot</h1>
    <br/>
    <div className='row'>
    <img src={deadshot} className='image'/>
  </div>
  </div>;
}

export default Product1;
