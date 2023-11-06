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
</div>

  );
}

export default Home;