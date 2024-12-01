import React from 'react';
import '../CreatorForm/CreatorForm.css'

function CreatorFormSubmitted() {
  return <div className='mainContainer'>
    <h2>Thank you for your interest</h2>
    <br/>
    <p>A member of our team will be in contact with you shortly</p>
    <p>If you do not hear back from the team within ten working days please contact us through our chat</p>
    <p>While waiting for a response why not check out our products</p>
    <a href='/Products'>Click here</a>
  </div>;
}

export default CreatorFormSubmitted;
