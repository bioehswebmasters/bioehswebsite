import React from 'react';
import homeClubImage from '../Images/UniversalClubPictures/MainPagePhoto.jpg'; 
import './Home.css';
function Home() {
  return (

<div className="home-container">
    <div className="img-container">
    <div className="textOverLayed">
          <h1>Bioengineering Honor Society</h1>
          <p>Recognize outstanding UC Berkeley Bioengineering undergraduates for their academic excellence. Alongside strong 
            scholastic achievements, the society promotes exceptional character and encourages members to engage in volunteer work, professional development, and community events.
            </p>
            <button className="join-button">Join Us</button>
        </div>
        <img src={homeClubImage} alt="Home" className="coverimage" />
        </div>
        <div className="elibility-container">
            <h1> Eligibility </h1>
            <button className="constitution-button">
            <a href="https://docs.google.com/document/d/128hynYuoDcyebJkTh7-hyMTzCPVr_NIyCMC2QJEfHFU/edit#heading=h.21coc93ntare" target="_blank" rel="noopener noreferrer">
            Our Constitution
            </a>
</button>
        </div>
</div>

  );
}

export default Home;