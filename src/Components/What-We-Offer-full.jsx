import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const WhatWeOfferFull = () => {
    const [posts, setPosts] = useState([]);
    const { REACT_APP_BASE_URL } = process.env;
    const { productId } = useParams()
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/divinehub/whatweoffer/${productId}`
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
   
    return (
        <div className="space-work-room-grow-folder">
            {posts.map((post, index) => (
                <div className="space-work-room-blog-box-section" key={post[0]?.id}>
                    <div className="space-work-image">
                        <img
                            src={`${REACT_APP_BASE_URL}${post.field_image}`}
                            alt="banner"
                        />
                    </div>
                    <div className="we_offer_desc">
                        <span>WE OFFER</span>
                        <h2>{post.title.replace(/<\/?[^>]+(>|$)/g, "")}</h2>
                        <p>{post.field_what_we_offer_subtitle.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WhatWeOfferFull;