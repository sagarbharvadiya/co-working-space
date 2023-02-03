import React from "react";
import Roompricedata from "../json_data/Roompricedata";

function Roompricesection(){
    return(
        <>
            <div className="room-price-section">
                <div className="roompricewrapper">
                    <div className="room-price-folder">
                        {
                            Roompricedata.map((val) => {
                                return <div className="room-price-blog-box-section">
                                            <div className="room-price-image">
                                                <img src={val.image} alt="img"/>
                                            </div>
                                            <div className="room-price-place-folder">
                                                <span>{val.userplace}</span>
                                                <h2>{val.title}</h2>
                                                <div className="user-enter">
                                                    <a href="/" className="user-icon"><i className="fa-solid fa-user"></i></a>
                                                    <p>{val.usercount}</p>
                                                </div>
                                                <a href="/" className="room-price-btn">{val.readmore}</a>
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

export default Roompricesection;