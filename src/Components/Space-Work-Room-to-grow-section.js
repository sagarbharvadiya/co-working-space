import React, { useEffect, useState } from "react";
// import Spacewraokdata from "../json_data/Spaceworkdata";

function Spaceworkroomgrowsection() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
         `${REACT_APP_BASE_URL}/jsonapi/node/what_we_offer?include=field_image`
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
      <div className="space-work-room-grow-section">
        <div className="spaceworkeoomgrowwrapper">
          <h2 className="space-work-room-text">What We Offer</h2>
          <h2 className="space-work-room-title">
            Space to Work & Room to Grow
          </h2>
          <div className="space-work-room-grow-folder">
            {posts.map((post, index) => (
              <div className="space-work-room-blog-box-section" key={post.id}>
                {includes.map((include, index2) => {
                  if (index === index2) {
                    return (
                      <>
                        <div className="space-work-image">
                          <img src={REACT_APP_BASE_URL + include.attributes.uri.url} alt="banner" />
                        </div>
                        <div className="we_offer_desc">
                        <span>WE OFFER</span>
                        <h2>{post.attributes.field_what_we_offer_title.value}</h2>
                        <p>{post.attributes.field_what_we_offer_subtitle.value}</p>
                        <a href="/" className="space-work-btn">
                          Read More
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

export default Spaceworkroomgrowsection;
