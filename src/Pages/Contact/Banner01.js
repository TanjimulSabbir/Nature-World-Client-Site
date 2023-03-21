import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { GrYoutube } from 'react-icons/gr';


const Banner01 = () => {
    return (
        <div className='UniversalPadding py-24 Bg-light-green'>
            <div className='flex flex-col mid-lg:flex-row space-y-16 mid-lg:space-y-0 mid-lg:space-x-3 justify-center items-center'>
                <div className='w-full mid-lg:w-1/2'>
                    <h1 className='UniversalHeadingText'>Contact <span className='Text-Primary'>Details</span></h1>
                    <p className='mt-10'>
                        Get in touch with us today to learn more about our plants and services. Whether you have a question about a specific plant, need help choosing the perfect greenery for your space, or want to place an order, our team is here to assist you. You can reach us by phone, email, or through our contact form below. We look forward to hearing from you!
                    </p>
                    <div>
                        <div className='mt-8 text-2xl flex space-x-4'>
                            <FiFacebook />
                            <AiOutlineTwitter />
                            <FaLinkedinIn />
                            <GrYoutube />
                        </div>
                    </div>
                </div>
                <div className='w-full mid-lg:w-1/2'>
                    <iframe title='Google Map' className='rounded-lg' width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Rajshahi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner01;