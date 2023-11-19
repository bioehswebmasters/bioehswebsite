import React from 'react';
import './Committees.css';
import CommitteesCarousel from '../components/CommitteesCarousel/CommitteesCarousel.js';

function Committees() {
    return (
        <body>
            <h1>Bioengineering Honor Society's Committees</h1>
            <div className="Academic Container"></div>
            <CommitteesCarousel
                committeefolder="Academic"
                committee="Academic"
                bios={            <>
                    <h3>Welcome to the Academic Committee – your gateway to academic excellence in Bioengineering at Berkeley!</h3>
                    <h4>About Us:</h4>
                    <p>
                        Dive into a world of endless possibilities with the Academic Committee! We are passionate about fostering the academic development of BioE students, offering a vibrant array of experiences to enrich your academic journey.
                    </p>

                    <h4>What We Do:</h4>

                    <p>
                        Alumni Insights: Explore diverse post-graduation paths, from advanced degrees (MTM, MS, MD, PhD, MD/PhD) to exciting opportunities in the industry. Our alumni panels provide a firsthand look at the myriad of possibilities awaiting you.
                    </p>

                    <p>
                        Faculty Luncheons: Join us for intimate luncheons with esteemed faculty members from the BioE department. It's a unique chance to connect, ask questions, and gain insights that go beyond the classroom.
                    </p>

                    <p>
                        Study Sessions: We believe in the power of collaborative learning. Join our study sessions to conquer academic challenges, share knowledge, and build a supportive community.
                    </p>

                    <p>
                        Advising Excellence: Navigating the academic landscape can be complex. That's why we host advising sessions right before Phase 1, helping you tailor your coursework to match your interests within BioE.
                    </p>

                    <h4>For Committee Members:</h4>
                    <p>
                        Greetings! Get ready for an exciting semester filled with academic exploration and personal growth.
                    </p>

                    <p>
                        Weekly Meetups: Join us every week as we embark on a journey of discovery. From demystifying the art of emailing professors to delving into the nuances of post-graduation choices, we've got your back.
                    </p>

                    <p>
                        Subcommittees Galore: This semester, choose your path with two dynamic subcommittees – Academic Seminars and Academic Support. In Seminars, unleash your academic prowess by organizing grad school panels, journal readings, and professor coffee-chats. In Support, we'll collaboratively set up study sessions, compile invaluable course resources, and guide you through the maze of academic choices.
                    </p>

                    <p>
                        Your Ideas Matter: We thrive on innovation! Share your brilliant ideas and feedback to shape the Academic Committee into a vibrant community that suits your needs.
                    </p>

                    <p>
                        By semester's end, you'll not only expand your academic vocabulary but also forge lasting connections and unlock new horizons. Join us in the Academic Committee and discover the limitless academic opportunities that Bioengineering has to offer!
                    </p>
                </>
            }
        />
        <div />
            
        </body>
    );
}

export default Committees;
