import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BioEHSC">BioEHSC</Link></li>
        <li><Link to="/Committees">Committees</Link></li>
        <li><Link to="/CourseMap">Course Map</Link></li>
        <li><Link to="/Decal">Decal</Link></li>
        <li><Link to="/Leadership">Leadership</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;