import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="options">
        <Link to="/BioEHSC">BioEHSC</Link>
        <Link to="/Committees">Committees</Link>
        <Link to="/CourseMap">Course Map</Link>
        <Link to="/Decal">Decal</Link>
        <Link to="/Leadership">Leadership</Link>
      </div>
    </nav>
  );
}

export default Navbar;