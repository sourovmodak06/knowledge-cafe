import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.blog;
    return (
        <div className='my-8'>
            <img src={blogCoverImage} alt="Blog cover images" className='h-[450px] w-[845px]'/>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center'>
                    <img src={authorImage} alt="Author images" className='h-[60px] w-[60px] rounded-full'/>
                    <div className='ml-6'>
                        <h2 className='font-bold text-2xl'>{authorName}</h2>
                        <h3 className='text-base font-semibold text-[#11111199]'>{publishDate}</h3>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-medium text-[#11111199] mr-2'>{readTime} min read</h3>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
            <h3>{blogTitle}</h3>
            <div className="h-[1px] bg-[#11111126]"></div>
        </div>
    );
};

export default Blog;