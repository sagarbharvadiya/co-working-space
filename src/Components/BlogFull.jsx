import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
// import dataJson from '../json_data/BlogFull.js'
import parse from 'html-react-parser'

const BlogFull = () => {
    const [posts, setPosts] = useState([]);
    const { REACT_APP_BASE_URL } = process.env;
    const { productId } = useParams()
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/divinehub/latest-blogs/${productId}`
            );
            if (!response.ok) {
                // oups! something went wrong
                return;
            }
            const posts = await response.json();
            setPosts(posts);
            console.log(posts);
        }
        loadPosts();
    }, []);

    // const thisProduct = posts.find(prod => prod.nid === productId)

    console.log(posts);
    let dec = ""
    if (posts.length) {
        dec = parse(posts[0]?.field_blog_desc)
    }
    return (

        <React.Fragment key={posts.nid}>
            <div className="explore-latest-blog-box-section">
                <div className="explore-latest-blog-image">
                    <img src={`${REACT_APP_BASE_URL}${posts[0]?.field_blog_image}`} alt="img" />
                    <div className="explore-latest-title">
                        <h2>{posts.title}</h2>
                        <div><p>{posts.field_blog_desc}</p></div>
                        <div className="exlpore-latest-date-section">
                            <p className="explore-latest-date">
                                {posts[0]?.field_blog_date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogFull