import React from 'react';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="nav-container">
      <div className="nav-brand">
        <span className="brand-text">Federico Zhou</span>
      </div>
      <ul className="nav-menu">
        <li><a href="#" className="nav-link">Journey</a></li>
        <li><a href="#" className="nav-link">Projects</a></li>
        <li><a href="#" className="nav-link">Contacts</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 