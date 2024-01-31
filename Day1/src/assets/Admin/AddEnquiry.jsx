import React, { useState } from 'react';
import "./AddEnquiry.css"

const AddEnquiryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !course || !message) {
      alert('Please fill in all fields');
      return;
    }
  
    onSubmit({ name, email, course, message });
  
    setName('');
    setEmail('');
    setCourse('');
    setMessage('');
  };

  return (
    <div className='bodddy'>
    
    <div className="AddEnquiryForm">
      <h2>Add Enquiry</h2>
      <form onSubmit={handleSubmit} className="enquiryForm">
        <div className="formGroup">
          <label className="formLabel">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="formInput"
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="formInput"
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Course:</label>
          <input 
            type="text" 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
            required 
            className="formInput"
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className="formTextarea"
          />
        </div>
        <button type="submit" className="submitButton">Submit Enquiry</button>
      </form>
    </div>
    </div>
  );
};

export default AddEnquiryForm;
