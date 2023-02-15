import React from 'react'
import Booktoursection from '../Components/Book-Tour-section'
// import Coworkingcitiessection from '../Components/Coworking-Cities-slider'
// import Expriencedexperts from '../Components/Experienced-Experts'
import Explorelatestblogsection from '../Components/Explore-Latest-Blog-section'
import Flexiblepriceplansection from '../Components/Flexible-Pricing-Plan-section'
import Homeslidersection from '../Components/Home-slider-section'
import Inforsection from '../Components/Info-section'
// import Officeenviroment from '../Components/Office-Environment'
import Ourgallerylogosection from '../Components/Our-gallery-logo'
// import Ourgallerysection from '../Components/Our-gallery-section'
import Gallery from '../Components/gallery'
// import Roompricesection from '../Components/Room-price-section'
import Spaceworkroomgrowsection from '../Components/Space-Work-Room-to-grow-section'
// import UserCountersection from '../Components/User-counter-section'
import Whataboutourservices from '../Components/Words-About-Our-Service-section'
import Passioninspirationalsection from '../Components/Passion-Inspirational'
import GoogleMap from '../Components/Google-map';
import ChatBotApp from '../Components/ChatBotApp';
import BookTourForm from '../Components/BookTourForm'

const Home = () => {

  return (
    <>
      <Homeslidersection />
      <Spaceworkroomgrowsection />
      {/* <Roompricesection /> */}
      <Passioninspirationalsection />
      {/* <Coworkingcitiessection /> */}
      {/* <Officeenviroment /> */}
      <Inforsection />
      <Flexiblepriceplansection />
      {/* <Ourgallerysection /> */}
      <Gallery />
      <GoogleMap/>
      {/* <Expriencedexperts /> */}
      <Whataboutourservices />
      <Ourgallerylogosection />
      <Explorelatestblogsection />
      {/* <Booktoursection /> */}
      {/* <UserCountersection /> */}
      <BookTourForm/>
      <ChatBotApp/>
    </>
  )
}

export default Home
