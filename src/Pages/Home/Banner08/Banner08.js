import React from 'react';
import { Link } from 'react-router-dom';

const Banner08 = () => {
    return (
        <div className="UnversalPadding py-16 md:py-24 w-full Bg-light-green shadow-2xl">
            <div className="relative mx-auto">
                <img className='w-full mid-lg:w-[70%] mid-lg:rounded-xl mx-auto' src='https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/news-latter-background.png' alt="" />

                <div className="absolute inset-0 p-10 flex justify-center items-center 
                mid-lg:top-1/4 md:w-4/5 mid-lg:w-3/5 mx-auto">
                    <div>
                        <div className="w-full">
                            <div>
                                <h1 className='text-2xl mid-lg:text-3xl text-gray-800'>Subscribe for Our Plant Updates</h1>
                                <p className='mt-3 w-full'>Join the plant revolution and discover why more and more people are turning to nature to enhance their lives - learn more on our website</p>
                            </div>
                            <div className='flex space-x-2 mt-2 sm:mt-5 md:mt-8'>
                                <input type="text" placeholder="Enter Your Email Here"
                                    className="w-full py-2 px-4 rounded-[30px] bg-white" />
                                <p className='Btn-Outline bg-white hover:border-white' >Subscribe</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner08;