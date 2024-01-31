import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Sidebar from './Sidebar';


const HomePage = () => {
  const[dash,setDash]=useState(false);

  return (
    <div class="hom">
    
    <div class="-header">
  <h1>BEC ENQUIRY</h1>

  <div className='topnav'>
  <a href="/login">Logout</a>
  </div>

  
  <div class="-topnav">
  <div>
  <a onMouseOver={()=>setDash(!dash)}>Menu</a>
  <Sidebar dash={dash}/>
  </div>
  <a href='/about'>About</a>
  <a href='/contact'>Contact</a>
  <a href='/payment'>Payment</a>
  
  </div>
  </div>
  <div className="container">
  
  <h3>Welcome to Enquiry Management System</h3>
  <p>
        Manage and track your enquiries efficiently with our Enquiry Management System.
        </p>
        
        <div className="features">
        <div className="feature">
        <h3>View Courses</h3>
        <p>Check the list of all Courses.</p>
        <Link to="/enquiries">View Courses</Link>
        </div>
        
        <div className="feature">
        <h3>View Enquiries</h3>
        <p>Check the list of all Enquiries.</p>
        <Link to="/enquiries">View Enquiries</Link>
        </div>

        <div className="feature">
        <h3>Delete Enquiries</h3>
        <p>Delete your submitted enquiries.</p>
        <Link to="/enquiries">Delete Enquiries</Link>
        </div>
  
        </div>
      
        </div>
        </div>
   
  )
}

export default HomePage;
