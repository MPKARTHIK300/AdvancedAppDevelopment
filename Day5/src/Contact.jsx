import React, { useState } from 'react';
import './Contact.css'; 

const ContactPage = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle form submission, such as sending the data to a backend server
    console.log('Form submitted:', { name, email, message });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <div className="boddy">
      <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">Have questions or feedback? Drop us a message!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default ContactPage;
