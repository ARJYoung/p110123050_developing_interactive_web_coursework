import React, {useState} from 'react';
import '../CreatorForm/CreatorForm.css';

function CreatorForm() {
    const [formData, setFormData] = useState({
      email:'',
    });
  const [errors, setErrors] = useState ([]);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
      ... formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm (formData);
    setErrors (newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('submit successfull');
    }else {
      console.log ('submit unsuccessfull');
    }
  };
  const validateForm = (data) => {
    const errors ={};
    if (!data.email.trim()) {
      errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
  }
  return errors;
  };
        
  return <div className='mainContainer'>
    <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
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
    </form>
  </div>;
}

export default CreatorForm;
