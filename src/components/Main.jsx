import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Knowledge-data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='flex justify-between flex-col md:flex-row'>
            <div>
                {
                    blogs.map(blog => <Blog
                        blog = {blog}
                        key={blog.id}
                    ></Blog>)
                }
            </div>
            <div className='md:my-8'>
                <div className='sticky md:top-20'>
                <h2>Spent time on read : 177 min</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;