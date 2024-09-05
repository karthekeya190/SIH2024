import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Custom CSS file for better styling

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Disaster Management</h1> {/* Replace with an image if needed */}
        </div>
        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/disaster-updates">Disaster Updates</Link></li>
            <li><Link to="/response-plans">Response Plans</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
