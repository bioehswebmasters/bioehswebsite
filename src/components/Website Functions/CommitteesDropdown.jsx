import React from 'react'
import './CommitteesDropdown.css'

function CommitteesDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Committees</button>
      <div className="dropdown-content">
        <a href="#">Academic</a>
        <a href="#">Outreach</a>
        <a href="#">Professional Development</a>
        <a href="#">Projects</a>
      </div>
    </div>
  )
}

export default CommitteesDropdown
