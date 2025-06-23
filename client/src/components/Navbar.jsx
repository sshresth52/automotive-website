import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // we will write basic styles here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-text">
            BOXCARS
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#listings">Listings</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="btn btn-outline">
            Sign In
          </Link>
          <Link to="/register" className="btn btn-primary">
            Submit Listing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
