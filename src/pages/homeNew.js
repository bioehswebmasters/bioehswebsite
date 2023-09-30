import React from 'react'
import { Navbar } from './components'
import {
    AboutUs,
    UpcomingEvents,
    RecentEvents,
    JoinUs,
    Footer,
  } from './container'

  

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <UpcomingEvents />
      <RecentEvents />
      <JoinUs />
      <Footer />
    </div>
  )
}
export default Home
