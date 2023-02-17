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
        dec = parse(posts[0]?.field_blog_desc_1)
    }
    return (

        <React.Fragment key={posts.nid}>
            <div className='blogfull-section'>
                <div className='blogfull-wrapper'>
                    <div className='blog-full-blog-box-section'>
                    <h2>{posts[0]?.title}</h2>
                        <span> {posts[0]?.field_blog_date}</span>
                        <div className='blogfull-image-folder'>
                        <img src={`${REACT_APP_BASE_URL}${posts[0]?.field_blog_image}`} alt="img" />
                        </div>
                        <p>{dec}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogFull