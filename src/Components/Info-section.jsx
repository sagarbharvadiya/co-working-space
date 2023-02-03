// import React, { useEffect, useState } from "react";
import dataJson from "../json_data/Amenities.js";


function Inforsection() {
    // const [posts, setPosts] = useState([]);
    // // const { REACT_APP_BASE_URL } = process.env;
    // useEffect(() => {
    //     async function loadPosts() {
    //         const response = await fetch(
    //             // `${REACT_APP_BASE_URL}/jsonapi/node/pricing_plans?include=field_icon`

    //         );
    //         if (!response.ok) {
    //             // oups! something went wrong
    //             return;
    //         }
    //         const posts = await response.json();
    //         setPosts(posts);
    //     }
    //     loadPosts();
    // }, []);
    return (
        <>
            <div className="info-section">
            <h2 class="amenities_text">Amenities</h2>
                <div className="infowrapper">
                    <div className="info-folder">
                        {
                            dataJson.map((d, i) => (
                                <>
                                    <div className="info-blog-box-section">
                                        <div className="info-image">
                                            <img src={d.image} alt={d.image} />
                                        </div>
                                        <h4>{d.details}</h4>
                                        {/* <p>Extremely painful or again love pursue desire.</p> */}
                                    </div>
                                   
                                </>
                            ))}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Inforsection;