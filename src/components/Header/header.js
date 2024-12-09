// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import "./Header.css"; // Import the CSS file for Navbar styling

const Header = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
