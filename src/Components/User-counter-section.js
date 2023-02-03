import React from "react";
import Usercounterdata from "../json_data/Usercounterdata";

function UserCountersection(){
    return(
        <>
            <div className="user-counter-section">
                <div className="usercounterwrapper">
                    <div className="user-counter-folder">
                        {
                            Usercounterdata.map((val) => {
                                return <div className="user-counter-blog-box-section">
                                            <span>{val.number}</span>
                                            <h2>{val.menbers}</h2>
                                            <p>{val.des}</p>
                                            <div className="user-count-image">
                                                <img src={val.image} alt={val.image}/>
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

export default UserCountersection;