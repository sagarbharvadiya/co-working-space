import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Spaceworkroomgrowsection() {
  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/divinehub/whatweoffer`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }
    loadPosts();
    console.log(posts)
  }, []);
  return (
    <>
      <div className="space-work-room-grow-section">
        <div className="spaceworkeoomgrowwrapper">
          <h2 className="space-work-room-text">What We Offer</h2>
          <h2 className="space-work-room-title">
            Space to Work & Room to Grow
          </h2>
          <div className="space-work-room-grow-folder">
            {posts.map((post, index) => {
              return (
                <React.Fragment key={post.id}>
                  <div className="space-work-room-blog-box-section" key={post.id}>
                    <div className="space-work-image">
                      <img
                        src={`${REACT_APP_BASE_URL}${post.field_image}`}
                        alt="banner"
                      />
                    </div>
                    <div className="we_offer_desc">
                      <span>WE OFFER</span>
                      <h2>{post.title.replace(/<\/?[^>]+(>|$)/g, "")}</h2>
                      <p>{post.field_what_we_offer_subtitle.replace(/<\/?[^>]+(>|$)/g, "")}</p> 
                      <Link data-item-id={post.nid} to={`/About/${post.nid}`} className="space-work-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </React.Fragment>

              )
            }

            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Spaceworkroomgrowsection;
