import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegistrationPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }


    if (!passwordPattern.test(password)) {
      alert('Password must contain at least 8 characters including one number, one special character, and one uppercase letter.');
      return;
    }


    if (mobile.length !== 10) {
      alert('Mobile number must be 10 digits long.');
      return;
    }
    else {
      alert('Invalid Mobile Number');
    }

    console.log('Form submitted:', { username, email, mobile, age, password });
    setUsername('');
    setEmail('');
    setMobile('');
    setAge('');
    setPassword('');
  };
 

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="textt" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="emaill">Email:</label>
          <input 
            type="emaill" 
            id="emaill" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input 
            type="tel" 
            id="mobile" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input 
            type="number" 
            id="age" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className='submitt'>
          <button type="submit" className="submit-b">
          <a href='/'>
          Register
          </a>
          </button>
          </div>

      </form>
    </div>
  );
};

export default RegistrationPage;
