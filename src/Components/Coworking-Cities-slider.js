import React, { Component } from "react";
import Slider from "react-slick";
import coworkingcityimage from "../images/coworking-clint-slider-image.jpg";
import citieslogo from "../images/cowrking-cityes-image1.PNG";

export default class Coworkingcitiessection extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="coworking-cities-section">
          <div className="coworkingcitieswrapper">
            <h2 className="Flexible-Workspace-InYour-City">
              Flexible Workspace In Your City!
            </h2>
            <div className="coworking-cities-filter-folder">
              <button>Office Space</button>
              <button>Private Space</button>
              {/* <button>Open Space</button> */}
              <button>Meeting Rooms</button>
            </div>
            <div className="coworking-cities-folder">
              <Slider {...settings}>
                <div className="coworking-cities-blog-box-section">
                  <div className="coworking-cites-image">
                    <img src={coworkingcityimage} alt={coworkingcityimage} />
                  </div>
                  <div className="coworking-cities-info-folder">
                    <div className="cowoking-cities-info">
                      <div className="cowoking-cities-logo">
                        <img src={citieslogo} alt={citieslogo}/>
                      </div>
                      <span>KoDesk Newyork</span>
                      <p>240 Spaces</p>
                      <div className="cowoking-tour-btn">
                        <a href="/">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                  <h2 className="coworking-cities-folder-title">Read More</h2>
                </div>
                <div className="coworking-cities-blog-box-section">
                  <div className="coworking-cites-image">
                    <img src={coworkingcityimage} alt={coworkingcityimage} />
                  </div>
                  <div className="coworking-cities-info-folder">
                    <div className="cowoking-cities-info">
                      <div className="cowoking-cities-logo">
                        <img src={citieslogo} alt={citieslogo}/>
                      </div>
                      <span>KoDesk Newyork</span>
                      <p>240 Spaces</p>
                      <div className="cowoking-tour-btn">
                        <a href="/">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                  <h2 className="coworking-cities-folder-title">Read More</h2>
                </div>
                <div className="coworking-cities-blog-box-section">
                  <div className="coworking-cites-image">
                    <img src={coworkingcityimage} alt={coworkingcityimage} />
                  </div>
                  <div className="coworking-cities-info-folder">
                    <div className="cowoking-cities-info">
                      <div className="cowoking-cities-logo">
                        <img src={citieslogo} alt={citieslogo} />
                      </div>
                      <span>KoDesk Newyork</span>
                      <p>240 Spaces</p>
                      <div className="cowoking-tour-btn">
                        <a href="/">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                  <h2 className="coworking-cities-folder-title">Read More</h2>
                </div>
                <div className="coworking-cities-blog-box-section">
                  <div className="coworking-cites-image">
                    <img src={coworkingcityimage} alt={coworkingcityimage} />
                  </div>
                  <div className="coworking-cities-info-folder">
                    <div className="cowoking-cities-info">
                      <div className="cowoking-cities-logo">
                        <img src={citieslogo} alt={citieslogo} />
                      </div>
                      <span>KoDesk Newyork</span>
                      <p>240 Spaces</p>
                      <div className="cowoking-tour-btn">
                        <a href="/">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                  <h2 className="coworking-cities-folder-title">Read More</h2>
                </div>
                <div className="coworking-cities-blog-box-section">
                  <div className="coworking-cites-image">
                    <img src={coworkingcityimage} alt={coworkingcityimage}/>
                  </div>
                  <div className="coworking-cities-info-folder">
                    <div className="cowoking-cities-info">
                      <div className="cowoking-cities-logo">
                        <img src={citieslogo} alt={citieslogo}/>
                      </div>
                      <span>KoDesk Newyork</span>
                      <p>240 Spaces</p>
                      <div className="cowoking-tour-btn">
                        <a href="/">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                  <h2 className="coworking-cities-folder-title">Read More</h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}
