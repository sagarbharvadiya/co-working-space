import React, { useEffect, useState } from "react";
import Slider from "react-slick";


function Flexiblepriceplansection() {
  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/divinehub/pricing_plan`
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
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="flexible-price-plan-section">
        <div className="flexiblepriceplanwrapper">
          <span className="Pricing-Plans">Pricing & Plans</span>
          <h2 className="flexible-price-title">
            We Have Flexible Pricing Plan
          </h2>
          <div className="flexible-price-folder">
            {/* {posts.map((post, index) => (
              <div className="flexible-price-blog-box-section" key={post.id}>
                {includes.map((include, index2) => {
                  if (index === index2) {
                    return (
                      <>
                        <div className="flexible-price-folder1">
                          <div className="flexible-price-image-folder">
                            <img
                              src={
                                REACT_APP_BASE_URL + include.attributes.uri.url
                              } alt="img"
                            />
                          </div>
                          <span>${post.attributes.field_price}</span>
                        </div>
                        <div className="flexible-price-folder2">
                          <h2>{post.attributes.title}</h2>
                          <p>
                            {post.attributes.field_sub_title.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            )}
                          </p>
                        </div>
                        <div className="flexible-price-des-section">
                          <div className="flexible-price-des-folder1">
                            <p>
                              {post.attributes.field_description.replace(
                                /<\/?[^>]+(>|$)/g,
                                ""
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flexible-price-btn">
                          <a href="/">
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                          <a href="/" className="Choose-Plan">
                            Choose a Plan
                          </a>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            ))} */}

            {/*  */}
            <Slider {...settings}>
              {posts.map((post) => {
                return (
                  <React.Fragment key={post.id}>
                    <div className="flexible-price-blog-box-section">
                      <div className="what-we-offer-image-folder">
                        <img src={`${REACT_APP_BASE_URL}${post.field_icon}`} alt={post.field_icon} />
                      </div>
                      <div className="flexible-price-folder1">
                        <div className="flexible-price-image-folder">
                          {/* <h2>{post.title}</h2> */}
                        </div>
                        <span>₹ {post.field_price}</span>
                      </div>
                      <div className="flexible-price-folder2">
                        <h2>{post.title.replace(/<\/?[^>]+(>|$)/g, "")}</h2>
                        <p>
                          {post.field_sub_title.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                      </div>
                      <div className="flexible-price-des-section">
                        <div className="flexible-price-des-folder1">
                          <p>
                            {post.field_description.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flexible-price-btn">
                        <a
                          href={post.field_razorpay_link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a
                          href={post.field_razorpay_link}
                          rel="noreferrer"
                          target="_blank"
                          className="Choose-Plan"
                        >
                          Choose a Plan
                        </a>
                      </div>
                    </div>
                  </React.Fragment>

                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flexiblepriceplansection;
