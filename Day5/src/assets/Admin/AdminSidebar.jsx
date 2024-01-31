import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = ({ dash }) => {
  return (
    <div className={dash ? "sidebar" : "sidebar-inactive"}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="#">Admin</Link>
        </li>
        <li>
        <Link to='/addenquiry'>Add Enquiry</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
