import React, { useState } from "react";
import logoimage from '../images/DH-Logo.png';
import { NavLink } from "react-router-dom";

function Topheadersection() {
    const [modal, sertModal] = useState(false);

    const toggleModal = () => { sertModal(!modal) }

    const [search_modal, setsearch_modal] = React.useState(false);
    return (
        <>
            <a href="#" onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></a>
            {modal && (
                <div className="Top-Header-section">
                    <div className="Topheaderwrapper">
                        {/* <h2 className="menu-title">Menu</h2> */}
                        <div className="logo">
                        <NavLink to="/"><img src={logoimage} alt="logo"/></NavLink>  
                        </div>
                        <div onClick={toggleModal} className="menu">
                            <li><NavLink to="/">Home</NavLink></li>
                            {/* <li><NavLink to="About">About</NavLink></li> */}
                            <li><NavLink to="/Locations">Location</NavLink></li>
                            <li><NavLink to="/Workspaces">Workspaces</NavLink></li>
                            <li><NavLink to="/Blog">Blog</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </div>
                        <div className="serach-folder">
                            <a>Search</a>
                            <a href="/" className="serach-icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                        <div className="serach-input">
                            <input type="Search" className="inner-input" placeholder="Search..." />
                            <a href="/" className="serach-icon-btn"><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>
                </div>
            )}
            <div className="Top-Header-section-folder">
                <div className="Topheaderwrapperfolder">
                    {/* <h2 className="menu-title-folder">Menu</h2> */}
                    <div className="logo-folder">
                    <NavLink to="/"><img src={logoimage} alt="logo"/></NavLink> 
                    </div>
                    <div onClick={toggleModal} className="menu-folder">
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* <li><NavLink to="About">About</NavLink></li> */}
                        <li><NavLink to="/Locations">Location</NavLink></li>
                        <li><NavLink to="/Workspaces">Workspaces</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </div>
                    {/* <div className="serach-folder-contenar">
                        <span>Search</span>
                        <span onClick={() => setsearch_modal(!search_modal)} className="serach-icons"><i className="fa-solid fa-magnifying-glass"></i></span>
                        {search_modal &&
                            <div className="search_modal">
                                <input type="search" placeholder="search" />
                            </div>
                        }
                    </div> */}
                    <div className="social_media">
                        <ul className="">
                            <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/coworkingdivinehub/"><i className="fa-brands fa-facebook-f"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/divinehub_coworkingspace/"><i className="fa-brands fa-instagram"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/divinehubcoworkingspace"><i className="fa-brands fa-linkedin"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCHa1BIykpWdnlMsoxjOeiIQ"><i className="fa-brands fa-youtube"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheadersection;