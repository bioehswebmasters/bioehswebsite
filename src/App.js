import React from 'react';

import { AboutUs, UpcomingEvents, RecentEvents, JoinUs, Footer } from './container';
import { Navbar } from './components';
import './App.css';
/*what the initial homepage will have and its breakdown
Navbar-- Home button, Decal Button, BioEHSC button, Commitees Button, Leadership Button, JoinUs Button
Header -- We are Bioehs blurred photo of current club/board
AboutUs -- Our purpose, what we do, and who does it insert our logo
UpcomingEvents -- connect our calendar, connect our instagram, 
RecentEvents -- "month" recap 
JoinUs -- button for interest form, application, closed or open, disclaimer that it's acceptance based on email.
Footer -- disclaimer that we are not affiliated with the club, contact us
*/

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <UpcomingEvents/>
    <RecentEvents />
    <JoinUs />
    <Footer />
  </div>
);

export default App;
