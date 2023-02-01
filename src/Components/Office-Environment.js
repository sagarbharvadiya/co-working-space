import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function Officeenviroment() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/featured_spaces?include=field_workspace_image`
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="office-envirment-section">
        <div className="officeenvirmentwrapper">
          <div className="Better-Office-Environment">
            <div className="better-office-envirment-folder1">
              <p>Featured Spaces</p>
              <h2>Better Office Environment</h2>
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

          {/* <div>
              {posts.map((post, index) => (
                <div>
                  {includes.map((include, index2) => {
                    if(index === index2) {
                      return(
                        <div>
                          <img src={"https://divinehub.krushna53.com" + include.attributes.uri.url}/>
                          <span>{post.attributes.field_workspace_type.value}</span>
                          <span>{post.attributes.field_workspace_address.value}</span>
                          <h2>{post.attributes.field_workspace_name.value}</h2>
                          <span>${post.attributes.field_workspace_price}/Mo</span>
                          <p>{post.attributes.field_workspace_area}</p>
                          <p>{post.attributes.field_workspace_capacity}</p>
                        </div>
                      )
                    }
                  })}
                </div>
              ))}
              </div> */}
          <div className="office-envirment-folder">
            <Slider {...settings}>
              {posts.map((post, index) => (
                <div
                  className="office-envirment-blog-box-section"
                  key={post.id}
                >
                  {includes.map((include, index2) => {
                    if (index === index2) {
                      return (
                        <div className="office-envirment-image">
                          <img
                            src={
                              REACT_APP_BASE_URL + include.attributes.uri.url
                            }
                         alt="" />
                          <div className="office-envirment-des-folder">
                            <span className="office-envirment-des-folder-title">
                              {post.attributes.field_workspace_type.value}
                            </span>
                            <div className="office-envirment-des">
                              <p>
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                {post.attributes.field_workspace_address.value.replace(
                                  /<\/?[^>]+(>|$)/g,
                                  ""
                                )}
                              </p>
                              <h2>
                                {post.attributes.field_workspace_name.value}
                              </h2>
                              <div className="office-envirment-price-folder">
                                <span>
                                  ${post.attributes.field_workspace_price}/Mo
                                </span>
                                <div className="office-envirment-user-folder">
                                  <p>
                                    <i className="fa-solid fa-house"></i>{" "}
                                    {post.attributes.field_workspace_area}
                                  </p>
                                  <p>
                                    <i className="fa-solid fa-user"></i>{" "}
                                    {post.attributes.field_workspace_capacity}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
export default Officeenviroment;
