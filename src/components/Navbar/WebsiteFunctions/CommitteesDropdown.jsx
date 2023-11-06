import React, { useState } from 'react';
import './CommitteesDropdown.css';
const CommitteesDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleHover = () => {
    setShowOptions(true);
  }

  const handleLeave = () => {
    setShowOptions(false);
  }

  return (
    <li className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <button className="dropbtn">Committees</button>
      {showOptions && (
        <ul className="dropdown-content">
          <li>Academic</li>
          <li>Outreach</li>
          <li>Professional Development</li>
          <li>Projects</li>
        </ul>
      )}
    </li>
  );
};

export default CommitteesDropdown;