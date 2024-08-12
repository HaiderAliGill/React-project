// src/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MyLogo</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-links" onClick={closeMenu}>User</Link>
          </li>
          <li className="nav-item">
            <Link to="/params" className="nav-links" onClick={closeMenu}>Params</Link>
          </li>
          <li className="nav-item">
            <Link to="/fetch" className="nav-links" onClick={closeMenu}>Fetch</Link>
          </li>
          <li className="nav-item">
            <Link to="/post" className="nav-links" onClick={closeMenu}>Post</Link>
          </li>
          <li className="nav-item">
            <Link to="/update" className="nav-links" onClick={closeMenu}>Update</Link>
          </li>
          <li className="nav-item">
            <Link to="/delete" className="nav-links" onClick={closeMenu}>Delete</Link>
          </li>
          <li className="nav-item">
            <Link to="/axios" className="nav-links" onClick={closeMenu}>Axios</Link>
          </li>
          <li className="nav-item">
            <Link to="/todo" className="nav-links" onClick={closeMenu}>TODOLIST</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
