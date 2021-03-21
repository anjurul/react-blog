import React, { useEffect, useState } from 'react';
import { Blog } from '../Blog/Blog';
import fakeData from '../fakeData/posts';




const Home = () => {
    const first20 = fakeData.slice(0,10);
    const [blogs, setBlogs] = useState(first20);

    useEffect(() => {

        setBlogs(first20)
        
    }, [])

    return (
        <>

            <h1>Articles {blogs.length}</h1>
        
            {
                blogs.map(blog => <Blog blog={blog}></Blog>)
            }
           
        </>
    );
};

export { Home };