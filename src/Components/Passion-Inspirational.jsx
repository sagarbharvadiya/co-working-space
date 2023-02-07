import React, { useEffect, useState } from "react";

function Passioninspirationalsection() {
  const [posts, setPosts] = useState([]);
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/who_we_are?include=field_whoweareimage`
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
  },);
  return (
    <>
      {posts.map((post, index) => (
        <div className="passtion-inspirational-section">
         
          <div className="passtioninspriractionwrapper">
              <div className="passtion-inspirational-left-section">
              {includes.map((include, index2) => (
                <div className="passtion-inspirational-left-folder1">
                  <div className="passtion-inspirational-left-image1">
                    <img className="left-img" src=
                    {REACT_APP_BASE_URL + include.attributes.uri.url}
                   alt="img" />
                  </div>
                </div>
              ))}
              </div>
            <div className="passtion-inspirational-right-section">
              <div className="passtion-inspirational-text">WHO WE ARE</div>
              <h2>{post.attributes.field_whoweare_title.value}</h2>
              <p>{post.attributes.field_whoweare_subtitle.value.replace(/<\/?[^>]+(>|$)/g,"")}</p>
              <div className="kodesk-diffrent-contenar">
                <div className="Kodesk-difference">
                  <div className="Kodesk-difference-folder1">
                    <span>1</span>
                    <h2>Kodesk-difference</h2>
                  </div>
                  <div className="Kodesk-difference-folder1">
                    <a href="/">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="/" className="Kodesk-difference-read-more">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="Kodesk-difference">
                  <div className="Kodesk-difference-folder1">
                    <span>1</span>
                    <h2>Kodesk-difference</h2>
                  </div>
                  <div className="Kodesk-difference-folder1">
                    <a href="/">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="/" className="Kodesk-difference-read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Passioninspirationalsection;
