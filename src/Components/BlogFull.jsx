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
    if(posts.length){
         dec = parse(posts[0]?.field_blog_desc)
    }
    return (
        
        <React.Fragment key={posts.nid}>
            <div className=''>
                <img src={posts[0]?.field_blog_image} alt="img" />
                <p>{posts[0]?.title}</p>
                <div>{dec}</div>
                     

            </div>
        </React.Fragment>
    )
}

export default BlogFull