import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import dataJson from '../json_data/BlogFull'
import dataJson from '../json_data/Data.json'


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
      console.log(posts);
    }
    loadPosts();
  }, []);
  return (
    <>
      <div className="explore-latest-blog-section">
        <div className="explorelatestblogwrapper">
          <span className="Pricing-Plans">{dataJson.blog_title}</span>
          <h2 className="flexible-price-title">{dataJson.blog_sub_title}</h2>
          <div className="explore-latest-blog-folder">
            {posts.map((post, index) => {
              console.log(post.nid)
              return (
                <React.Fragment key={post.nid}>
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
                          <p className="explore-latest-date">
                              {post.field_blog_date}
                            </p>
                          <div className="explore-latest-btn">
                            <Link data-item-id={post.nid} to={`/Blog/${post.nid}`} className="explore-latest-read-more">
                            <i className="fa-solid fa-arrow-right"></i>  {dataJson.read_more_btn}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explorelatestblogsection;
