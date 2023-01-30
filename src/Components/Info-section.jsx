import React, { useEffect, useState }  from "react";
import infoimage1 from '../images/infor-image1.png';
import infoimage2 from '../images/infor-image2.png';
import infoimage3 from '../images/infor-image3.png';
import infoimage4 from '../images/infor-image4.png';
import infoimage5 from '../images/infor-image5.png';
import infoimage6 from '../images/infor-image6.png';

function Inforsection(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      async function loadPosts() {
        const response = await fetch(
          "http://localhost/reactwordpress/wp-json/wp/v2/features"
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
    return(
        <>
            <div className="info-section">
                <div className="infowrapper">
                    <div className="info-folder">
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage1}/>
                            </div>
                            <h2>Fast Internet</h2>
                            <p>Extremely painful or again love pursue desire.</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage2}/>
                            </div>
                            <h2>Ups Backup</h2>
                            <p>The same as saying throgh shrinking from toil.</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage3}/>
                            </div>
                            <h2>Tea/Coffee</h2>
                            <p>Extremely painful or again love pursue desire.</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage4}/>
                            </div>
                            <h2>House Keeping</h2>
                            <p>The same as saying throgh shrinking from toil.</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage5}/>
                            </div>
                            <h2>Air Conditioner</h2>
                            <p>We like best every pleasure to be welcomed.</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-circle-contenar">
                                <span>40</span>
                                <h2>High Range Of Amenities</h2>
                            </div> 
                        </div>  
                        <div className="info-blog-box-section">
                            <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                            <p>View All Amenities</p>
                        </div>
                        <div className="info-blog-box-section">
                            <div className="info-image">
                                <img src={infoimage6}/>
                            </div>
                            <h2>Scanner & Printer</h2>
                            <p>We like best every pleasure to be welcomed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inforsection;