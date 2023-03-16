import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";

const Banner04 = () => {
    return (
        <div className='UniversalPadding py-24'>
            <div className='flex justify-center items-center space-x-20'>
                <img className='w-5/12' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/about-nature-world-1525x1536.png" alt="" />

                <div className='w-7/12'>
                    <img className='w-32 mb-3' src="http://localhost:3000/static/media/leaf-vector.ad003a027923f0a4d1eacf9d8ae73854.svg" alt="" />
                    <h1 className='UniversalHeadingText'>About <span className='Text-Primary leading-snug'>Nature Plantly World</span></h1>
                    <p className='mt-8 text-justify'>Welcome to our plant website, where nature meets style and wellness. We believe that plants are more than just decorations - they are living, breathing companions that can transform your home or office into a sanctuary of beauty and serenity.


                    </p>
                    <p className='mt-5 text-justify'>At our website, we are dedicated to providing you with the best selection of plants, accessories, and information to help you cultivate your own personal paradise. Whether you're an experienced gardener or just starting out, our expert team is here to guide you every step of the way.</p>
                    <Link to="/about" className='Btn-Primary mt-8'>Order Now <HiArrowSmRight className='ml-1 text-xl' /> </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner04;