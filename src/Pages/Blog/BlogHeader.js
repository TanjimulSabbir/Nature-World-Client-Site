import React from 'react';

const BlogHeader = () => {
    return (
        <div className='bg-center bg-cover w-full bg-no-repeat bg-fixed'
            style={{ backgroundImage: "url('https://i.ibb.co/MsqvR9d/main-banner-1.png')" }}>
            <h1 className='UniversalHeadingText text-[60px] h-[300px] text-white bg-black flex justify-center items-center bg-opacity-40'>Blog and News</h1>
        </div>
    );
};

export default BlogHeader;