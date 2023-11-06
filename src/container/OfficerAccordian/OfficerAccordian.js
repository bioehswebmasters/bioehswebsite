import React, { useState } from 'react';

function OfficerAccordian({name, pronouns,image1, image2, text }) {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div className="officer-card">
        <div className= "nameandpronouns">
            <h2>{name}</h2> 
            <h3>{pronouns}</h3>
        </div>
      <div className="card" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
        {showText ? (
          <div className="text">
            <p>{text}</p>
          </div>
        ) : (
          <div className="images">
            <img src={showText ? image2 : image1} alt="Image 1" />
          </div>
        )}
      </div>
      <button className="toggle-button" onClick={handleToggle}>
        More About Me!
      </button>
    </div>
  );
}

export default HoverCard;