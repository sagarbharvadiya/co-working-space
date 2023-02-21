import React, { useState } from "react";
import logoimage from '../images/DH-Logo.png';
import { NavLink } from "react-router-dom";
import datajson from '../json_data/Data.json'

function Topheadersection() {
    const [modal, sertModal] = useState(false);

    const toggleModal = () => { sertModal(!modal) }

    const [search_modal, setsearch_modal] = React.useState(false);
    return (
        <>
            <span onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></span>
            {modal && (
                <div className="Top-Header-section">
                    <div className="Topheaderwrapper">
                        <div className="logo">
                            <NavLink to="/"><img src={logoimage} alt="logo" /></NavLink>
                        </div>
                        <div onClick={toggleModal} className="menu">
                            <li><NavLink to="/">{datajson.nav_menu_home}</NavLink></li>
                            {/* <li><NavLink to="About">About</NavLink></li> */}
                            <li><NavLink onClick = {() => {scrollTo('Locations')}}>{datajson.nav_menu_Location}</NavLink></li>
                            <li><NavLink onClick = {() => {scrollTo('Workspaces')}}>{datajson.nav_menu_Workspaces}</NavLink></li>
                            <li><NavLink to="/Blog">{datajson.nav_menu_Blog}</NavLink></li>
                            <li><NavLink to="/Contact">{datajson.nav_menu_Contact}</NavLink></li>
                        </div>

                        <a href={`tel:${datajson.phone_number}`} className="call-icon"><i class="fa-solid fa-phone"></i></a>
                        <div className="serach-folder">
                            <span>Search</span>
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
                    <div className="logo-folder">
                        <NavLink to="/"><img src={logoimage} alt="logo" /></NavLink>
                    </div>
                    <div onClick={toggleModal} className="menu-folder">
                            <li><NavLink to="/">{datajson.nav_menu_home}</NavLink></li>
                            {/* <li><NavLink to="About">About</NavLink></li> */}
                            <li><NavLink onClick = {() => {scrollTo('Locations')}}>{datajson.nav_menu_Location}</NavLink></li>
                            <li><NavLink onClick = {() => {scrollTo('Workspaces')}}>{datajson.nav_menu_Workspaces}</NavLink></li>
                            <li><NavLink to="/Blog">{datajson.nav_menu_Blog}</NavLink></li>
                            <li><NavLink to="/Contact">{datajson.nav_menu_Contact}</NavLink></li>
                    </div>
                    <div className="social_media">
                        <ul className="">
                            <li><a href={`tel:${datajson.phone_number}`} className="call_icon"><i class="fa-solid fa-phone"></i></a></li>
                            <li><a rel="noreferrer" target="_blank" href={datajson.facbook}><i className="fa-brands fa-facebook-f"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href={datajson.instagram}><i className="fa-brands fa-instagram"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href={datajson.linkedin}><i className="fa-brands fa-linkedin"></i></a> </li>
                            <li><a rel="noreferrer" target="_blank" href={datajson.youtube}><i className="fa-brands fa-youtube"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="call-section">
                <div className="call-container">
                    <div className="call-folder">
                    <a href={`tel:${datajson.phone_number}`}><i class="fa-solid fa-phone"></i>
                        <p>Call Us</p>
                    </a>
                    </div>
                    <div className="call-folder">
                        <a href={datajson["whatsapp-API"]}><i class="fa-brands fa-whatsapp"></i>
                        <p>Whatsapp</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
function scrollTo(elem){
    document.getElementById(elem).scrollIntoView(true);
}

export default Topheadersection;