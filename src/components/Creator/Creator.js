import React from 'react';
import CreatorForm from '../CreatorForm/CreatorForm';
import '../CreatorForm/CreatorForm.css'
function Creator() {
  return <div className='mainContainer'>
    <h2>We want you</h2>
    <p>Social media creator?</p>
    <p> Want to promote our products?</p>
    <p>Fill in the form below and a member of the team will be in contact</p>
    <CreatorForm/>

  </div>;
}

export default Creator;
