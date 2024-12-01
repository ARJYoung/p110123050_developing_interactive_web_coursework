import React from 'react';
import '../CreatorForm/CreatorForm.css';

function CreatorForm() {
  return <div className='mainContainer'>
    <div className='row'>
        <input name="Email" id="Email" className="form-input" placeholder="Email" />
      </div>
      <br/>
      <div className='row'>
        <input name="CreatorName" id="CreatorName" className="form-input" placeholder="CreatorName" />
      </div>
      <br/>
      <div className='row'>
        <input name="SocialMedia" id="SocialMedia" className="form-input" placeholder="SocialMediaAccount" />
      </div>
      <br/>
      <div className='row'>
        <input type="number" name="TotalFollowers" id="TotalFollowers" className="form-input" placeholder="TotalNumberOfFollowers" />
      </div>
      <br/>
      <div class='row'>
        <div class='col-md'>    
        <a href='/submitted'className='submit-button' role="button">Submit</a>
        </div>
        <br/>
        <br/>
    </div>
  </div>;
}

export default CreatorForm;
