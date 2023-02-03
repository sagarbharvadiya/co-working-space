import React, { useEffect, useState } from "react";

function Explorelatestblogsection() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/blog?include=field_blog_image`
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
  return (
    <>
      <div className="explore-latest-blog-section">
        <div className="explorelatestblogwrapper">
          <span className="Pricing-Plans">Blog & Article</span>
          <h2 className="flexible-price-title">Explore Latest From Blog</h2>
          <div className="explore-latest-blog-folder">
            {posts.map((post, index) => (
              <div className="explore-latest-blog-box-section">
                {/* {includes.map((include, index2) => {
                  if(index === index2){
                    return(
                    <div>
                      <img
                        src={"https://divinehub.krushna53.com" + include.attributes.uri.url}
                      />
                      <div>
                        <h2>{post.attributes.field_blog_title.value}</h2>
                        <span>{post.attributes.field_blog_desc.value}</span>
                      </div>
                    </div>
          )}})} */}
                {includes.map((include, index2) => {
                  if (index === index2) {
                    return (
                      <div className="explore-latest-blog-image">
                        <img
                          src={REACT_APP_BASE_URL + include.attributes.uri.url}
                        alt={Image}/>
                        <div className="explore-latest-title">
                          <div className="explore-latest-folder1">
                            {/* <div className="explore-latest-user">
                              <div className="user-image">
                                <img src="" alt="" />
                              </div>
                              <span>By: Admin</span>
                            </div> */}
                            {/* <a href="/">
                              <i className="fas fa-share-alt"></i>
                            </a> */}
                          </div>
                          <h2>{post.attributes.field_blog_title.value}</h2>
                          <p>
                            {post.attributes.field_blog_desc.value.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            )}
                          </p>
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

export default Explorelatestblogsection;
