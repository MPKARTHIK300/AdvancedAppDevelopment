import React, { useState } from 'react';
import './Payment.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!isValidCardNumber(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }

    
    if (!isValidExpiry(expiry)) {
      alert('Please enter a valid expiry date in MM/YY format and in the future.');
      return;
    }

    
    if (!isValidCVV(cvv)) {
      alert('Please enter a valid 3-digit CVV.');
      return;
    }

    
    console.log('Payment submitted:', { cardNumber, expiry, cvv, name });
  };

  
  const isValidCardNumber = (cardNumber) => {
    return /^\d{16}$/.test(cardNumber);
  };

  
  const isValidExpiry = (expiry) => {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      return false; // Invalid format
    }

    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100; 
    const currentMonth = new Date().getMonth() + 1; 

    
    const inputMonth = parseInt(month, 10);
    const inputYear = parseInt(year, 10);

    
    return inputYear > currentYear || (inputYear === currentYear && inputMonth > currentMonth);
  };

  
  const isValidCVV = (cvv) => {
    return /^\d{3}$/.test(cvv);
  };

  return (
    <div className="bbody">
    <div className="payment-container">
    
      <h2>Payment Form</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input 
            type="text" 
            id="cardNumber" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Expiry (MM/YY):</label>
          <input 
            type="text" 
            id="expiry" 
            value={expiry} 
            onChange={(e) => setExpiry(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input 
            type="text" 
            id="cvv" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name on Card:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
    </div>
  );
};

export default PaymentForm;
