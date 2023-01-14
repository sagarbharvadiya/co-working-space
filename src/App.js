import React from 'react';
import './App.css';
import Topheadersection from './Components/Top-header-section';
import Homeslidersection from './Components/Home-slider-section';
import Spaceworkroomgrowsection from './Components/Space-Work-Room-to-grow-section';
import Roompricesection from './Components/Room-price-section';
import Passioninspirationalsection from './Components/Passion-Inspirational';
import Coworkingcitiessection from './Components/Coworking-Cities-slider';
import Officeenvirment from './Components/Office-Environment';
import Inforsection from './Components/Info-section';
import Flexiblepriceplansection from './Components/Flexible-Pricing-Plan-section';
import Ourgallerysection from './Components/Our-gallery-section';
import Expriencedexperts from './Components/Experienced-Experts';
import Whataboutourservices from './Components/Words-About-Our-Service-section';
import Ourgallerylogosection from './Components/Our-gallery-logo';
import Explorelatestblogsection from './Components/Explore-Latest-Blog-section';
import Booktoursection from './Components/Book-Tour-section';
import UserCountersection from './Components/User-counter-section';
import Footersection from './Components/Footer-section';

function App() {
  return (
    <>
      <Topheadersection></Topheadersection>
      <Homeslidersection></Homeslidersection>
      <Spaceworkroomgrowsection></Spaceworkroomgrowsection>
      {/* <Roompricesection></Roompricesection> */}
      <Passioninspirationalsection></Passioninspirationalsection>
      {/* <Coworkingcitiessection></Coworkingcitiessection> */}
      <Officeenvirment></Officeenvirment>
      <Inforsection></Inforsection>
      <Flexiblepriceplansection></Flexiblepriceplansection>
      <Ourgallerysection></Ourgallerysection>
      {/* <Expriencedexperts></Expriencedexperts> */}
      <Whataboutourservices></Whataboutourservices>
      <Ourgallerylogosection></Ourgallerylogosection>
      <Explorelatestblogsection></Explorelatestblogsection>
      <Booktoursection></Booktoursection>
      <UserCountersection></UserCountersection>
      <Footersection></Footersection>
    </>
  );
}

export default App;
