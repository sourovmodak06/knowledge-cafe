import React from 'react';

const Blog = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.blog;
    return (
        <div className='my-8'>
            <img src={blogCoverImage} alt="Blog cover images" className=''/>
            <h1>{authorName}</h1>
        </div>
    );
};

export default Blog;