import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Topheadersection from './Components/Top-header-section';
import Home from './Pages/Home';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Workspaces from './Pages/Workspaces';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Footersection from './Components/Footer-section';

function App() {
  return (
    <>
      <Topheadersection/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Locations' element={<Locations/>}></Route>
        <Route exact path='/Workspaces' element={<Workspaces/>}></Route>
        <Route exact path='/News' element={<News/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footersection/>
    </>
  );
}

export default App;
