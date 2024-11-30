import React from 'react';
import '../CreatorForm/CreatorForm.css';

function CreatorForm() {
  return <div className='mainContainer'>
    <div className='row'>
        <input name="Email" id="Email" className="email-input" placeholder="Email" />
      </div>
      <br/>
      <div className='row'>
        <input name="CreatorName" id="CreatorName" className="CreatorName-input" placeholder="CreatorName" />
      </div>
      <br/>
      <div className='row'>
        <input name="SocialMedia" id="SocialMedia" className="ScoialMedia-input" placeholder="SocialMediaAccount" />
      </div>
      <br/>
      <div className='row'>
        <input type="number" name="TotalFollowers" id="TotalFollowers" className="TotalFollowers-input" placeholder="TotalNumberOfFollowers" />
      </div>
      <br/>
      <div class='row'>
        <div class='col-md'>    
        <a href='/Submitted'className='navbar-btn navbar-btn-hover' role="button">Submit</a>
        </div>
        <br/>
        <br/>
    </div>
  </div>;
}

export default CreatorForm;
