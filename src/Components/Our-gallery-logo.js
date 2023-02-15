import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import dataJson from '../json_data/Data.json'

const Ourgallerylogosection = () => {
  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/divinehub/our_client_logo`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }
    loadPosts();
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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

      <div className="brand_logos">
        <div className="gallery_logo_title">
        <h2>{dataJson.Our_Happy_Customers}</h2>

        </div>
        <Slider {...settings}>
          {posts.map((post, index) => {
            return (
              <React.Fragment key={post.id}>
                <div className="">
                  <div className="our-gallery-logo-image">
                    <img src={`${REACT_APP_BASE_URL}${post.field_logo}`} alt="image" />
                  </div>
                </div>
              </React.Fragment>
            )
          }

          )}
        </Slider>
      </div>
    </>
  );
};

export default Ourgallerylogosection;
