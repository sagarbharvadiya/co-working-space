import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Whataboutourservices = () => {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/testimonials?include=field_reviewer_img`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const jsonData = await response.json();
      const includes = jsonData.included;
      const posts = jsonData.data;
      console.log(posts);
      setPosts(posts);
      setIncludes(includes);
    }
    loadPosts();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className="words-about-our-services-section">
        <div className="wordsaboutourservices">
          <div className="Better-Office-Environment">
            <div className="better-office-envirment-folder1">
              <p>Testimonials</p>
              <h2>Words About Our Service</h2>
            </div>
            <div className="better-office-envirment-folder2">
              <a href="/">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="/" className="better-office-envirment-read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="words-about-our-services-folder">
            <Slider {...settings}>
              {posts.map((post, index) => (
                <div className="words-about-our-services-blog-box-section">
                  {includes.map((include, index2) => {
                    if (index === index2) {
                      return (
                        <>
                          <div className="words-about-our-services-conternar">
                            <div className="words-about-our-services-image-folder">
                              <div className="words-about-our-services-image">
                                <img
                                  src={
                                    REACT_APP_BASE_URL + include.attributes.uri.url
                                  }
                             alt="img"   />
                              </div>
                              <div className="words-about-our-services-title">
                                <h2>
                                  {post.attributes.field_reviewer_name.value}
                                </h2>
                                <span>
                                  {
                                    post.attributes.field_reviewer_occupation
                                      .value
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>{post.attributes.field_review.value.replace(
                                  /<\/?[^>]+(>|$)/g,
                                  ""
                                )}</p>
                          <div className="words-about-our-services-stars">
                            <a href="/">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fa-solid fa-star"></i>
                            </a>
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
};

export default Whataboutourservices;
