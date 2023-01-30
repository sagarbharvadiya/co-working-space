import React from 'react'
import Booktoursection from '../Components/Book-Tour-section'
import Coworkingcitiessection from '../Components/Coworking-Cities-slider'
import Expriencedexperts from '../Components/Experienced-Experts'
import Explorelatestblogsection from '../Components/Explore-Latest-Blog-section'
import Flexiblepriceplansection from '../Components/Flexible-Pricing-Plan-section'
import Homeslidersection from '../Components/Home-slider-section'
import Inforsection from '../Components/Info-section'
import Officeenviroment from '../Components/Office-Environment'
import Ourgallerylogosection from '../Components/Our-gallery-logo'
import Ourgallerysection from '../Components/Our-gallery-section'
import Roompricesection from '../Components/Room-price-section'
import Spaceworkroomgrowsection from '../Components/Space-Work-Room-to-grow-section'
import UserCountersection from '../Components/User-counter-section'
import Whataboutourservices from '../Components/Words-About-Our-Service-section'
import Passioninspirationalsection from '../Components/Passion-Inspirational'

const Home = () => {
//   const { REACT_APP_BASE_URL } = process.env;
  return (
    <>
      <Homeslidersection />
      <Spaceworkroomgrowsection />
      <Roompricesection />
      <Passioninspirationalsection />
      <Coworkingcitiessection />
      <Officeenviroment />
      <Inforsection />
      <Flexiblepriceplansection />
      <Ourgallerysection />
      <Expriencedexperts />
      <Whataboutourservices />
      <Ourgallerylogosection />
      <Explorelatestblogsection />
      <Booktoursection />
      <UserCountersection />

    </>
  )
}

export default Home
