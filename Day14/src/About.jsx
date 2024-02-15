import React from 'react';
import university from "./assets/university.jpg";
import Navbar from './Navbar.jsx';
import './About.css';

function About() {
  return (
    <div className='emoty'>
      <Navbar />
      <div className='container'>
        <br /><br /><br /><br />
        <h1 className='h1'>About Us</h1>
        <div className='contain'>
          <p>
          Welcome to the Enquiry Management. We are dedicated to serving as the primary point of contact for all inquiries, providing essential information, guidance, and support to our diverse community of students, faculty, staff, and stakeholders.
          Our Mission:
          At the heart of our mission is a commitment to facilitating seamless communication and fostering meaningful interactions within the university community. We strive to deliver accurate, timely, and personalized assistance to address a wide range of inquiries and concerns.
          What We Do:
          The Enquiry Management team is here to assist you with a variety of needs, including admissions inquiries, program information, campus resources, and general assistance. Whether you're a prospective student exploring our academic offerings or a current member of our community seeking guidance, we are dedicated to helping you navigate your journey with clarity and confidence.
          Our Approach:
          We believe in building strong relationships and fostering a culture of responsiveness, professionalism, and empathy. Our team members are dedicated professionals who are committed to providing exceptional service and support to every individual we serve.
          How We Can Help:
          Whether you prefer to connect with us in person, over the phone, or online, our knowledgeable staff are ready to assist you with your inquiries and provide the information and resources you need to succeed. We are here to listen, guide, and empower you throughout your academic and professional endeavors.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
