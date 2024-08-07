import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">E-Learning</Link>
        <ul className="navbar-menu">
          <li><Link to="/courses" className="navbar-link">Courses</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          <li><Link to="/admin-dashboard" className="navbar-link">Admin Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
