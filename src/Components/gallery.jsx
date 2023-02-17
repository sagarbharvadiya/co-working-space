import React from "react";
import Ourgallerydata from '../json_data/data'
import dataJson from '../json_data/Data.json'

function Gallery() {
    return (
        <>
            <div className="our-agllery-section" id="Workspaces">
                <div className="ourgallerywrapper">
                    <div className="Better-Office-Environment">
                        <div className="better-office-envirment-folder1">
                            <p>{dataJson.gallery_title}</p>
                            <h2>{dataJson.gallery_sub_title}</h2>
                        </div>
                    </div>
                    <div className="our-gallrey-folder">
                        {
                            Ourgallerydata.map((val) => {
                                return (
                                    <React.Fragment key={val.id}>
                                        <div className="our-gallery-blog-box-section">
                                            <div className="our-gallery-contenar">
                                                <div className="our-gallery-folder1">
                                                    <div className="our-gallery-image-folder1">
                                                        <div className="our-gallery-image1">
                                                            <img src={val.image1} alt={val.image1} />
                                                        </div>
                                                        <div className="our-gallery-title1">
                                                            <h2>{val.title1}</h2>
                                                            <div className="our-gallery-btn">
                                                                <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                                                <a href="/" className="details">{val.Details}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="our-gallery-image-folder1">
                                                        <div className="our-gallery-image1">
                                                            <img src={val.image2} alt={val.image2} />
                                                        </div>
                                                        <div className="our-gallery-title1">
                                                            <h2>{val.title1}</h2>
                                                            <div className="our-gallery-btn">
                                                                <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                                                <a href="/" className="details">{val.Details}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="our-gallery-folder2">
                                                    <div className="our-gallery-image2">
                                                        <img src={val.image4} alt={val.image4} />
                                                    </div>
                                                    <div className="our-gallery-title1">
                                                        <h2>{val.title1}</h2>
                                                        <div className="our-gallery-btn">
                                                            <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                                            <a href="/" className="details">{val.Details}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="our-gallery-folder3">
                                                <div className="our-gallery-image3">
                                                    <img src={val.image3} alt={val.image3} />
                                                </div>
                                                <div className="our-gallery-title2">
                                                    <h2>{val.title2}</h2>
                                                    <div className="our-gallery-btn2">
                                                        <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                                        <a href="/" className="details">{val.Details}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Gallery;