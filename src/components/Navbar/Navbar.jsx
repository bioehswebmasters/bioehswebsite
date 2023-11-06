import React from 'react';
import bioEHSlogo from '../../Images/UniversalClubPictures/BioEHSLogo.png'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import CommitteesDropdown from './WebsiteFunctions/CommitteesDropdown';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={bioEHSlogo} alt="Logo" />
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