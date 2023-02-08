import React, { useEffect, useState } from "react";

function Explorelatestblogsection() {
  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/divinehub/latest-blogs`
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
  return (
    <>
      <div className="explore-latest-blog-section">
        <div className="explorelatestblogwrapper">
          <span className="Pricing-Plans">Blog & Article</span>
          <h2 className="flexible-price-title">Explore Latest From Blog</h2>
          <div className="explore-latest-blog-folder">
            {posts.map((post, index) => (
              <div className="explore-latest-blog-box-section">
                <div className="explore-latest-blog-image">
                  <img
                    src={`${REACT_APP_BASE_URL}${post.field_blog_image}`}
                    alt="Images"
                  />
                  <div className="explore-latest-title">
                    <h2>{post.title}</h2>
                    <p>{post.field_blog_desc.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    <div className="exlpore-latest-date-section">
                      {/* <p className="explore-latest-date">
                              {post.attributes.field_blog_date}
                            </p> */}
                      <div className="explore-latest-btn">
                        {/* <a href="/">
                                <i className="fa-solid fa-arrow-right"></i>
                              </a> */}
                        <a href="/" className="explore-latest-read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explorelatestblogsection;
