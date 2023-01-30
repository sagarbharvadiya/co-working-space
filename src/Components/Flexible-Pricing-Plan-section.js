import React, { useEffect, useState } from "react";


function Flexiblepriceplansection() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/pricing_plans?include=field_icon`
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
      <div className="flexible-price-plan-section">
        <div className="flexiblepriceplanwrapper">
          <span className="Pricing-Plans">Pricing & Plans</span>
          <h2 className="flexible-price-title">
            We Have Flexible Pricing Plan
          </h2>
          <div className="flexible-price-folder">
            {posts.map((post, index) => (
              <div className="flexible-price-blog-box-section" key={post.id}>
                {includes.map((include, index2) => {
                  if (index === index2) {
                    return (
                      <>
                        <div className="flexible-price-folder1">
                          <div className="flexible-price-image-folder">
                            <img
                              src={
                                "http://localhost" + include.attributes.uri.url
                              }
                            />
                          </div>
                          <span>${post.attributes.field_price}</span>
                        </div>
                        <div className="flexible-price-folder2">
                          <h2>{post.attributes.field_title[0].value}</h2>
                          <p>
                            {post.attributes.field_sub_title[0].value.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            )}
                          </p>
                        </div>
                        <div className="flexible-price-des-section">
                          <div className="flexible-price-des-folder1">
                            <p>
                              {post.attributes.field_description[0].value.replace(
                                /<\/?[^>]+(>|$)/g,
                                ""
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flexible-price-btn">
                          <a href="#">
                            <i class="fa-solid fa-arrow-right"></i>
                          </a>
                          <a href="#" class="Choose-Plan">
                            Choose a Plan
                          </a>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flexiblepriceplansection;
