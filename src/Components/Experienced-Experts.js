import React from "react";
import experienceexpertimage1 from "../images/signature-1.jpg";
import experienceexpertimage2 from "../images/team-2.jpg";
import experienceexpertimage3 from "../images/team-3.jpg";

function Expriencedexperts() {
  return (
    <>
      <section className="team-section">
        <div className="auto-container">
          <div className="sec-title centred">
            <h6>Our Leaders</h6>
            <h2>Our Experienced Experts</h2>
          </div>
          <div className="d-flex">
            <div className="team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={experienceexpertimage1} alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="text">
                      <h3>Max</h3>
                      <h2>
                        <a href="index.html">Benjamin</a>
                      </h2>
                      <span class="designation">- Senior Manager</span>
                    </div>
                    <div className="lower-content">
                      <figure className="signature pull-left">
                        <img src="/images/signature-1.png" alt="" />
                      </figure>
                      <ul className="list pull-right">
                        <li className="share-option">
                          <a href="index.html" class="share-icon">
                            <i class="fas fa-share-alt"></i>
                          </a>
                          <ul class="share-links clearfix">
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="tel:123456789123">
                            <i class="fas fa-phone"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={experienceexpertimage2} alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="text">
                      <h3>Chloe</h3>
                      <h2>
                        <a href="index.html">Savannah</a>
                      </h2>
                      <span class="designation">- CEO Founder</span>
                    </div>
                    <div className="lower-content">
                      <figure className="signature pull-left">
                        <img src="/images/signature-1.png" alt="" />
                      </figure>
                      <ul className="list pull-right">
                        <li className="share-option">
                          <a href="index.html" class="share-icon">
                            <i class="fas fa-share-alt"></i>
                          </a>
                          <ul class="share-links clearfix">
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="tel:123456789123">
                            <i class="fas fa-phone"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={experienceexpertimage3} alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="text">
                      <h3>Ethan</h3>
                      <h2>
                        <a href="index.html">Sebastian</a>
                      </h2>
                      <span class="designation">- Director of Marketing</span>
                    </div>
                    <div className="lower-content">
                      <figure className="signature pull-left">
                        <img src="/images/signature-1.png" alt="" />
                      </figure>
                      <ul className="list pull-right">
                        <li className="share-option">
                          <a href="index.html" class="share-icon">
                            <i class="fas fa-share-alt"></i>
                          </a>
                          <ul class="share-links clearfix">
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="tel:123456789123">
                            <i class="fas fa-phone"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expriencedexperts;
