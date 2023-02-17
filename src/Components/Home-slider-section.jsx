import React, { useEffect, useState } from "react";
import Slider from "react-slick";


function Homeslidersection() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/demo_banner?include=field_slider_image`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const jsonData = await response.json();
      const includes = jsonData.included;
      const posts = jsonData.data;
      setPosts(posts);
      setIncludes(includes);
    }
    loadPosts();
  }, []);
  return (
    <>
      
        <div className="home-slider-section">
          <div className="homesliderwrapper">
            <div className="home-slider-folder">
              <Slider {...settings}>
                {posts.map((post, index) => (
                  <div className="home-slider-blog-box-section">
                    {includes.map((include, index2) => {
                      if (index === index2) {
                        return (
                          <>
                            <div className="home-slider-image">
                              <img src={REACT_APP_BASE_URL + include.attributes.uri.url} alt="img" />  
                            </div>
                            <div className="home-slider-text-folder1">
                              <h2>
                                {post.attributes.field_slider_title.value}
                              </h2>
                              <span>{post.attributes.field_slide.value}</span>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Homeslidersection;
