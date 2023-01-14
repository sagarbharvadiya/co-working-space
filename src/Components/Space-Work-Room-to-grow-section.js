import React, { useEffect, useState } from "react";
// import Spacewraokdata from "./Spaceworkdata";

function Spaceworkroomgrowsection() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "http://localhost/drupalreact/jsonapi/node/what_we_offer?include=field_image"
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
                          <img src={"http://localhost" + include.attributes.uri.url} />
                        </div>
                        <span>WE OFFER</span>
                        <h2>{post.attributes.field_what_we_offer_title.value}</h2>
                        <p>{post.attributes.field_what_we_offer_subtitle.value}</p>
                        <a href="#" className="space-work-btn">
                          Readmore
                        </a>
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
