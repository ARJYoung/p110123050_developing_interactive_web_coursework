import React, { useState } from 'react';
import '../AccountLogIn/AccountLogIn.css';

function AccountLogIn() {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
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
    console.log('Login successfull');
  }else {
    console.log ('Login unsuccessfull');
  }
};
const validateForm = (data) => {
  const errors ={};
  if (!data.email.trim()) {
    errors.email = 'Email is required';
} else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
}
if (!data.password) {
  errors.password = 'Password is required';
} else if (data.password.length < 8) {
  errors.password = 'Password must be at least 8 characters long';
}

return errors;
};
  return (
      <div className="mainContainer">
          <h2 className="form-title">Login</h2>
          <br/>
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
              <div>
                  <input
                      className="form-input"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Password'
                  />
                  {errors.password && (
                      <span className="error-message">
                          {errors.password}
                      </span>
                  )}
              </div>
              <br/>
              <button className="submit-button" type="submit">Submit</button>
              <br/>
              <a href='/AccountPassword' role="button">Forgot password</a>
          </form>
      </div>
  );
}
export default AccountLogIn;
