import React from 'react';
import { Link } from 'react-router-dom';
import CommitteesDropdown from '../Website Functions/CommitteesDropdown';
import logo from '../../Images/UniversalClubPictures/BioEHS_ModernLogo.png'; // Adjust the path

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="options">
      <Link to="/BioEHSC">BioEHSC</Link>
      <CommitteesDropdown />
      <Link to="/CourseMap">Course Map</Link>
      <Link to="/Decal">Decal</Link>
      <Link to="/Leadership">Leadership</Link>
    </div>
  </nav>
  );
}

export default Navbar;
