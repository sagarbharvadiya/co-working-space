import React from "react";
import collabrationimage from '../images/together.png';
// import footerlogo from '../images/footer-image.png';
// import footeruserimage1 from '../images/populer-post-image1.jpg';
// import footeruserimage2 from '../images/populer-post-image2.jpg'

function Footersection() {
    return (
        <>
            <div className="footer-section">
                <div className="footerwrapper">
                    <div className="Get-Inspired-Collaboration">
                        <div className="collaboration-logo">
                            <img src={collabrationimage} alt="img" />
                        </div>
                        <span>DOING GOOD, TOGETHER.</span>
                        <h2>Get Inspired to The Collaboration</h2>
                        <div className="get-collabration-btns">
                            <div className="call-btn">
                                <a href="tel:9987547773"><i className="fa-solid fa-phone"></i></a>
                                <a href="tel:9987547773" className="number">99875 47773</a>
                            </div>
                            <div className="Appointment-btn">
                                <a href="mailto:cowork@divinehub.co.in"><i className="fa-solid fa-arrow-right"></i></a>
                                <a href="mailto:cowork@divinehub.co.in" className="Appointment">Appointment</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="footer-contenar">
                        <div className="footer-folder1">
                            <div className="footer-logo">
                                <img src={footerlogo}/>
                            </div>
                            <p>Rationally consequences thats
                               are extremely painful or again is
                               there anyone loves.
                            </p>
                            <div className="douwnlod-the-app">
                                <a href="#"><i className="fa-brands fa-google-play"></i></a>
                                <a href="#"><i className="fa-brands fa-apple"></i></a>
                            </div>
                        </div>
                        <div className="Company">
                            <h2>Company</h2>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Professionals</p>
                            <p>Insights</p>
                            <p>Solutions</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="Support">
                            <h2>Support</h2>
                            <p>Legal</p>
                            <p>Rewards</p>
                            <p>Request A Visit</p>
                            <p>Find Your Space</p>
                            <p>Sitemap</p>
                        </div>
                        <div className="Solutions">
                            <h2>Solutions</h2>
                            <p>Office Space</p>
                            <p>Private Space</p>
                            <p>Meeting Room</p>
                            <p>Hot Desk</p>
                            <p>Open Space</p>
                            <p>Virtual Office</p>
                        </div>
                        <div className="Popular-Post">
                            <div className="Popular-Post-user-folder">
                                <div className="Popular-Post-user-image">
                                    <img src={footeruserimage1}/>
                                </div>
                                <div className="Popular-Post-title">
                                    <p>21.08.2021</p>
                                    <h2>KoDesk Reports
                                        Second Quarter 2021
                                    </h2>
                                </div>
                            </div>
                            <div className="Popular-Post-user-folder">
                                <div className="Popular-Post-user-image">
                                    <img src={footeruserimage2}/>
                                </div>
                                <div className="Popular-Post-title">
                                    <p>21.08.2021</p>
                                    <h2>KoDesk Reports
                                        Second Quarter 2021
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="footer-copy">
                        <div className="container">
                        <div className="d-flex">
                            <div className="social_media">
                                <ul className="">
                                    <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/coworkingdivinehub/"><i className="fa-brands fa-facebook-f"></i></a> </li>
                                    <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/divinehub_coworkingspace/"><i className="fa-brands fa-instagram"></i></a> </li>
                                    <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/divinehubcoworkingspace"><i className="fa-brands fa-linkedin"></i></a> </li>
                                    <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCHa1BIykpWdnlMsoxjOeiIQ"><i className="fa-brands fa-youtube"></i></a> </li>
                                </ul>
                            </div>
                            <div className="copy_text">
                            <p><span>Copyright © 2023 | DivineHub</span></p>
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