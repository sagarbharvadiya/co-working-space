import React from "react";
import collabrationimage from '../images/together.png';
import datajson from '../json_data/Data.json'

function Footersection() {
    return (
        <>
            <div className="footer-section">
                <div className="footerwrapper">
                    <div className="Get-Inspired-Collaboration">
                        <div className="collaboration-logo">
                            <img src={collabrationimage} alt="img" />
                        </div>
                        <span>{datajson.footer_text_together}</span>
                        <h2>{datajson.footer_text_Collaboration}</h2>
                        <div className="get-collabration-btns">
                            <div className="call-btn">
                                <a href="tel:9987547773"><i className="fa-solid fa-phone"></i></a>
                                <a href="tel:9987547773" className="number">{datajson.phone_number}</a>
                            </div>
                            <div className="Appointment-btn">
                                <a href={`mailto:${datajson.email}`}><i className="fa-solid fa-arrow-right"></i></a>
                                <a href={`mailto:${datajson.email}`} className="Appointment">{datajson.Appointment_btn}</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy">
                        <div className="container">
                            <div className="d-flex">
                                <div className="social_media">
                                    <ul className="">
                                        <li><a rel="noreferrer" target="_blank" href={datajson.facbook}><i className="fa-brands fa-facebook-f"></i></a> </li>
                                        <li><a rel="noreferrer" target="_blank" href={datajson.instagram}><i className="fa-brands fa-instagram"></i></a> </li>
                                        <li><a rel="noreferrer" target="_blank" href={datajson.linkedin}><i className="fa-brands fa-linkedin"></i></a> </li>
                                        <li><a rel="noreferrer" target="_blank" href={datajson.youtube}><i className="fa-brands fa-youtube"></i></a> </li>
                                    </ul>
                                </div>
                                <div className="copy_text">
                                    <p><span>{datajson.copy_right_text}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footersection;