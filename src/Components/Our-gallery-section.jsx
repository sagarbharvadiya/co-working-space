import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-css'

function Ourgallerysection() {
  const [includes, setIncludes] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/jsonapi/node/gallery?include=field_gallery_image`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const jsonData = await response.json();
      const includes = jsonData.included;
      setIncludes(includes);
    }
    loadPosts();
  }, []);

  const breakpoints = {
    default: 4,
    1000: 3,
    700: 2
  }
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-heading">
          <span>Our Gallery</span>
          <h2 className="gallery-title">Inspirational Workspace</h2>
        </div>
        <div className="gallery-wrapper">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
          {includes.map((include, index2) => (
            <div className="gallery-image-section">
             <img className="gallery-img" src={"https://divinehub.krushna53.com" + include.attributes.uri.url}  alt="image"/>
            </div>
          ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}





{/* <Masonry columnsCount={4} gutter="10px">
          {includes.map((include, index2) => (
            <div className="gallery-image-section">
              <img className="gallery-img" src={"https://divinehub.krushna53.com" + include.attributes.uri.url}  alt="image"/>
            </div>
          ))}
</Masonry> */}
export default Ourgallerysection;
