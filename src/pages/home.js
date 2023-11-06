import React from 'react'
import homeClubImage from '../Images/UniversalClubPictures/MainPagePhoto.jpg'
import './Home.css'
function Home() {
  return (
    <div className="home-container">
      <div className="img-container">
        <div className="textOverLayed">
          <h1>Bioengineering Honor Society</h1>
          <p>
            Recognize outstanding UC Berkeley Bioengineering undergraduates for
            their academic excellence. Alongside strong scholastic achievements,
            the society promotes exceptional character and encourages members to
            engage in volunteer work, professional development, and community
            events.
          </p>
          <button className="join-button">Join Us</button>
        </div>
        <img src={homeClubImage} alt="Home" className="coverimage" />
      </div>

      <div className="elibility-container">
        <h1> Eligibility </h1>
        <div className="nonMemberParticipation">
          <h1>Bioengineer Opportunities</h1>
          <p>
            While applicants to Bioengineering Honor Society must meet minimum
            grade standards and apply for membership, many of our activities are
            open to all undergraduates. We feel this will give new
            undergraduates a chance to get to know the Bioengineering major,
            career, and peers before deciding to join our society. Please feel
            free to join us at advertised events and socials.
          </p>
          <button className="upcomingEvents-button">
            {/*add google calendar link to events for bioengineers*/}
            <a
              href="https://docs.google.com/document/d/128hynYuoDcyebJkTh7-hyMTzCPVr_NIyCMC2QJEfHFU/edit#heading=h.21coc93ntare"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Our Calendar Here
            </a>
          </button>
        </div>
        <div className="prospectiveMembers">
          <h1>Prospective Members</h1>
          <p>
            In order to be eligible, students need to have completed one
            semester at UC Berkeley and/or be a transfer student. The minimum
            GPA is 3.3 for juniors/seniors (including junior transfers), 3.5 for
            sophomores, and 3.7 for freshmen (spring). In addition to the unit
            and GPA requirements, prospective members must submit our sorting
            form.{' '}
            <b>
              The sorting form will be emailed by the department early in the
              semester.
            </b>{' '}
            As of 1/30, these emails have been sent out for the Spring 2023
            cycle.
          </p>
        </div>
      </div>

      <div className="aboutUs-container">
        <h1> We Help You Develop </h1>
        <div className= "qualitiesingrid">
        <div className="feature">
        <h2> A Community </h2>
        <p>
          Get to know your fellow candidates and the officer team and
          participate in volunteer and social events that benefit yourself and
          the community.
        </p>
        </div>
        <div className="feature">
        <h2>A Network</h2>
        <p>
          Meet and network with BioEHS alumni through info-sessions, alumni
          panels, and general meetings.
        </p>
        </div>
        <div className="feature">
        <h2> A Niche </h2>
        <p>
          Discover or narrow your interests/concentration within BioE by meeting
          more BioE peers in the classes you’re taking, seeking course advice
          from BioEHS members, and talking to BioE professors in the field.
        </p>
        </div><div className="feature">
        <h2> Professional Development Skills </h2>
        <p>
          Attend professional workshops covering LinkedIn, resumes, technical
          interviewing, public speaking, or work on hands-on hardware/software
          projects.
        </p>
        </div>
        </div>

        <button className="constitution-button">
          <a
            href="https://docs.google.com/document/d/128hynYuoDcyebJkTh7-hyMTzCPVr_NIyCMC2QJEfHFU/edit#heading=h.21coc93ntare"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Constitution
          </a>
        </button>
      </div>
      <div className="recent-Events"></div>
      <h1> October Recap! </h1>
    </div>
  )
}

export default Home
