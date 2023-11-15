
import OfficerCard from '../components/Officer Card/Card.js'; 
import './Leadership.css';

function Leadership() {
  // Sample officer data
  const officers = [
    { id: 1, name: 'Rhea Sood', position: 'President',  pronouns: 'She/her', bio: 'blahhh blahhh' },
    { id: 2, name: 'Anya Raju', position: 'External Vice President',  pronouns: 'She/her', bio: 'boop' },
    { id: 3, name: 'Vienna Huang', position: 'Secretary',  pronouns: 'She/her', bio: 'biiii' },
    { id: 4, name: 'Viviana Tran', position: 'Webmaster', pronouns: 'She/her', bio: 'miiii'},
    
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
              {row.map((officer) => (
                <OfficerCard key={officer.id} name={officer.name} position={officer.position} bioe ={officer.bio}/>
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
