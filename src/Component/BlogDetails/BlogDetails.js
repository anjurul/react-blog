import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import Comments from '../Comments/Comments';
import fakeData from '../fakeData/db.json';
import SinglePost from '../SinglePost/SinglePost';

function BlogDetails(props) {

    const { postId } = useParams();
    const [post, setPost] = useState({})
    
    useEffect(() => {
        const data = fakeData.posts.find(post => post.id == postId);
        setPost(data)
    }, [])
   
    return (
        <div>
            <SinglePost blog={post}></SinglePost>
            <Comments></Comments>
        </div>
    )
}

export default BlogDetails
