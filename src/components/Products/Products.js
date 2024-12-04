import React from 'react';
import '../Products/Products.css';
import deadshotLogo from '../../Images/deadshotLogo.jpg';
import tombstoneLogo from '../../Images/tombstoneLogo.jpg';
import elementalPop from '../../Images/elementalPop.png';
import doubletap2logo from '../../Images/doubletap2logo.jpg';
import jug from '../../Images/jug.jpg';
import electric from '../../Images/electric.png';

function Products() {

  return <div className='mainContainer'>
    <h2>Perk a Colas</h2>
    <br/>
    <div class='row'>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Deadshot</h5>
    <img src={deadshotLogo} className='image'/>
    <p class="card-text">Increases critical hit damage and aiming down sights moves automatically to an enemy's critical hit location.</p>
    <a href="/Deadshot" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Double Tap II</h5>
    <img src={doubletap2logo} className='image'/>
    <br/>
    <p class="card-text">This Perk increases the rate of fire of your weapon and doubles the bullets fired in an interesting way.</p>
    <a href="/DoubleTapII" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Jugger-Nog</h5>
    <img src={jug} className='image'/>
    <p class="card-text">This perk increases the players health allowing them to take more damage from enemies.</p>
    <a href="Juggernog" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
    </div>
    <br/>
    <br/>
    <div class='row'>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Electric Cherry</h5>
    <img src={electric} className='image'/>
    <p class="card-text">This perk creates an electric shockwave around the player whenever they reload that may stun an adjacent zombie.</p>
    <a href="ElectricCherry" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Tombstone Soda</h5>
    <img src={tombstoneLogo} className='image'/>
    <p class="card-text">This perk drops a tombstone wherever you may have died, preserving the last weapons you held.</p>
    <a href="Tombstone" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
      <div class="col-md">
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Elemental Pop</h5>
    <img src={elementalPop} className='image'/>
    <p class="card-text">This perk gives every bullet fired a small chance to apply a random base Ammo Mod effect at the base tier.</p>
    <a href="ElementalPop" class="btn btn-primary">Learn more here</a>
  </div>
  </div>
      </div>
    </div>
    <br/>
    <br/>
   
  </div>;
}

export default Products;
