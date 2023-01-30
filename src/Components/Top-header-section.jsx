import React,{ useState } from "react";
import logoimage from '../images/logo.png';
import { NavLink } from "react-router-dom";

function Topheadersection(){
    const[ modal, sertModal]=useState(false);

    const toggleModal= () => {sertModal(!modal)}
    return(
        <>
            <a href="#" onClick={toggleModal} className="show-btn"><i class="fa-solid fa-bars"></i></a>
            {modal &&(
            <div className="Top-Header-section">
                <div className="Topheaderwrapper">
                    <h2 className="menu-title">Menu</h2>
                    <div className="logo">
                        <img src={logoimage}/>
                    </div>
                    <div onClick={toggleModal} className="menu">
                         <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="About">About</NavLink></li>
                        <li><NavLink to="/Location">Location</NavLink></li>
                        <li><NavLink to="/Workspaces">Workspaces</NavLink></li>
                        <li><NavLink to="/News">News</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </div>
                    <div className="serach-folder">
                        <a>Search</a>
                        <a href="#" className="serach-icon"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <div className="serach-input">
                        <input type="Search" className="inner-input" placeholder="Search..."/>
                        <a href="#" className="serach-icon-btn"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
            </div>
            )}
            <div className="Top-Header-section-folder">
                <div className="Topheaderwrapperfolder">
                    <h2 className="menu-title-folder">Menu</h2>
                    <div className="logo-folder">
                        <img src={logoimage}/>
                    </div>
                    <div onClick={toggleModal} className="menu-folder">
                         <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="About">About</NavLink></li>
                        <li><NavLink to="/Location">Location</NavLink></li>
                        <li><NavLink to="/Workspaces">Workspaces</NavLink></li>
                        <li><NavLink to="/News">News</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </div>
                    <div className="serach-folder-contenar">
                        <a>Search</a>
                        <a href="#" className="serach-icons"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <div className="serach-input-folder">
                        <input type="Search" className="inner-input-folder" placeholder="Search..."/>
                        <a href="#" className="serach-icon-btn-folder"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheadersection;