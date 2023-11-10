import React from "react";
import OfficerCard from "../components/Officer Card/Card";
import './Leadership.css';

function Leadership() {
  // Sample officer data 
  const officers = [
    { name: "Officer 1", position: "President" },
    { name: "Officer 2", position: "Vice President" },
    { name: "Officer 3", position: "Treasurer" },
    // ... add more officers
  ];

  // Function to group officers into rows
  const groupOfficersIntoRows = (officers, officersPerRow) => {
    const rows = [];
    for (let i = 0; i < officers.length; i += officersPerRow) {
      rows.push(officers.slice(i, i + officersPerRow));
    }
    return rows;
  };

  // Set the maximum number of officers per row
  const officersPerRow = 3;

  // Group officers into rows
  const officerRows = groupOfficersIntoRows(officers, officersPerRow);

  return (
    <div className="body">
      <div className="leadership-container">
        <section id="executive-board">
          <h1>Executive Board</h1>
          {/* Content for Executive Board */}
          {officerRows.map((row, rowIndex) => (
            <div key={rowIndex} className="officer-cards-container">
              {row.map((officer, index) => (
                <OfficerCard key={index} name={officer.name} position={officer.position} />
              ))}
            </div>
          ))}
        </section>
      <section id="nonexecutive-board">
        {/* Content for Non-Executive Board */}
      </section>

      <section id="assistants">
        {/* Content for Assistants */}
      </section>

      <section id="senior-advisors">
        {/* Content for Senior Advisers */}
      </section>
    </div>
    </div>
  );
}

export default Leadership;