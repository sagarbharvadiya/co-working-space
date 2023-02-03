import React from "react";
import Ourgallerydata from '../json_data/data'

function Gallery(){
    return(
        <>
            <div className="our-agllery-section">
                <div className="ourgallerywrapper">
                        <div className="Better-Office-Environment">
                            <div className="better-office-envirment-folder1">
                                <p>Our Gallery</p>
                                <h2>Inspirational Workspace</h2>
                            </div>
                            {/* <div className="better-office-envirment-folder2">
                                <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                <a href="/" className="better-office-envirment-read-more">View More</a>
                            </div> */}
                        </div>
                    <div className="our-gallrey-folder">
                        {
                            Ourgallerydata.map((val) => {
                                return <div className="our-gallery-blog-box-section">
                                            <div className="our-gallery-contenar">
                                                <div className="our-gallery-folder1">
                                                    <div className="our-gallery-image-folder1">
                                                        <div className="our-gallery-image1">
                                                            <img src={val.image1}/>
                                                        </div>
                                                        <div className="our-gallery-title1">
                                                            <h2>{val.title1}</h2>
                                                            <div className="our-gallery-btn">
                                                                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                                                <a href="#" className="details">{val.Details}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="our-gallery-image-folder1">
                                                        <div className="our-gallery-image1">
                                                            <img src={val.image2}/>
                                                        </div>
                                                        <div className="our-gallery-title1">
                                                            <h2>{val.title1}</h2>
                                                            <div className="our-gallery-btn">
                                                                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                                                <a href="#" className="details">{val.Details}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="our-gallery-folder2">
                                                    <div className="our-gallery-image2">
                                                        <img src={val.image4}/>
                                                    </div>
                                                    <div className="our-gallery-title1">
                                                        <h2>{val.title1}</h2>
                                                        <div className="our-gallery-btn">
                                                            <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                                            <a href="#" className="details">{val.Details}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="our-gallery-folder3">
                                                <div className="our-gallery-image3">
                                                    <img src={val.image3}/>
                                                </div>
                                                <div className="our-gallery-title2">
                                                    <h2>{val.title2}</h2>
                                                    <div className="our-gallery-btn2">
                                                        <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                                        <a href="#" className="details">{val.Details}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Gallery;