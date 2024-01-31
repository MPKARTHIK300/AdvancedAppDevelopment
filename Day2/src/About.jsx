import React from 'react';
import './About.css'; 

const AboutPage = () => {
  return (
    <div className='about-body'>
      <h1 className="about-heading">About BEC Enquiry Management System</h1>
      <p className="about-paragraph">
        Welcome to the BEC Enquiry Management System. This system is designed to help businesses manage and track their enquiries efficiently.
      </p>
      <p className="about-paragraph">
        Our system allows users to:
        <ul className="about-list">
          <li className="about-list-item">Record new enquiries.</li>
          <li className="about-list-item">View and update existing enquiries.</li>
          <li className="about-list-item">Assign enquiries to specific team members.</li>
          <li className="about-list-item">Track the status and progress of enquiries.</li>
          <li className="about-list-item">Generate reports and analytics based on enquiry data.</li>
        </ul>
      </p>
      <p className="about-paragraph">
        This application is built using React for the frontend and a backend technology stack (such as Node.js, Express, and MongoDB) for data storage and retrieval.
      </p>
      <p className="about-paragraph">
        For any inquiries or feedback, please contact us at <a href="mailto:info@becenquiry.com" className="about-link">info@becenquiry.com</a>.
      </p>
    </div>
  );
};

export default AboutPage;
