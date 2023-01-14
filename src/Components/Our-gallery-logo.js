import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ourlogoimage1 from "../images/logo-image1.png";
import ourlogoimage2 from "../images/logo-image2.png";
import ourlogoimage3 from "../images/logo-image3.png";
import ourlogoimage4 from "../images/logo-image4.png";
import ourlogoimage5 from "../images/logo-image5.png";
import ourlogoimage6 from "../images/logo-image1.png";
import ourlogoimage7 from "../images/logo-image2.png";
import ourlogoimage8 from "../images/logo-image3.png";

const Ourgallerylogosection = () => {
  const [includes, setIncludes] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "http://localhost/drupalreact/jsonapi/node/our_clients_logo_?include=field_logo"
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const jsonData = await response.json();
      const includes = jsonData.included;
      setIncludes(includes);
    }
    loadPosts();
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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
      <div className="Our-gallery-logo-section">
        <div className="ourgallerylogowrapper">
          <div className="our-gallery-logo-folder">
            <Slider {...settings}>
            {includes.map((include, index2) => (
              <div className="our-gallery-logo-blog-box-section">
                <div className="our-gallery-logo-image">
                  <img src={"http://localhost" + include.attributes.uri.url} />
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourgallerylogosection;
