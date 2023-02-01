import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Ourgallerylogosection = () => {
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/our_clients_logo_?include=field_logo`
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
                  <img src={"https://divinehub.krushna53.com" + include.attributes.uri.url} />
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
