import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './AdminHomePage.css'
// import Sidebar from '../../Sidebar';
import AdminSidebar from './AdminSidebar';
const AdminHomePage = () => {
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
  <AdminSidebar dash={dash}/>
  </div>
  <a>Admin</a>

  </div>

  </div>
  <div className="container">
  
  <h3>Welcome Back Admin!!</h3>
  <p>
        Hope you are doing great.
        </p>
        
        <div className="features">
        <div className="feature">
        <h3>View Enquiries</h3>
        <p>Check the list of all enquiries submitted.</p>
        <Link to="#">View Enquiries</Link>
        </div>

        <div className="feature">
        <h3>Delete Course</h3>
        <p>Check the deleted enquiries.</p>
        <Link to="#">Delete Course</Link>
        </div>
        
        <div className="feature">
        <h3>Add New Enquiry</h3>
        <p>Submit a new enquiry to the system.</p>
        <Link to="/addenquiry">Add New Enquiry</Link>
        </div>
        </div>
      
        </div>
        </div>
   
  )
}

export default AdminHomePage;
