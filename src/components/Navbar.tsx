import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">StreamEvents</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
