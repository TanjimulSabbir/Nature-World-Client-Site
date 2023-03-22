import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner06 from '../Home/Banner06/Banner06';
import BlogHeader from './BlogHeader';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <BlogHeader></BlogHeader>
            <Banner06></Banner06>
        </div>
    );
};

export default Blog;