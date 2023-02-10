import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Topheadersection from './Components/Top-header-section';
import Home from './Pages/Home';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Workspaces from './Pages/Workspaces';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footersection from './Components/Footer-section';
import BlogFull from './Components/BlogFull';
import WhatWeOfferFull from './Components/What-We-Offer-full'


function App() {
  return (
    <>
      <Topheadersection/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Locations' element={<Locations/>}></Route>
        <Route exact path='/Workspaces' element={<Workspaces/>}></Route>
        <Route exact path='/Blog' element={<Blog/>}></Route>
        <Route exact path='/Blog/:productId' element={<BlogFull/>}></Route>
        <Route exact path='/About/:productId' element={<WhatWeOfferFull/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
      </Routes>
      
      <Footersection/>
    </>
  );
}

export default App;
