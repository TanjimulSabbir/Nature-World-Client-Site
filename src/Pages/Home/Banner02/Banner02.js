import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "./image/image-1.jpg"
import image2 from "./image/image-2.jpg"
import { HiArrowSmRight } from "react-icons/hi";

const Banner02 = () => {
    return (
        <div className='bg-white py-24'>
            <div className='UniversalMargin flex flex-col space-y-14 md:space-y-0 md:space-x-8 md:flex-row justify-center items-center'>

                <div className='Bg-Secondary rounded-lg flex justify-center items-center relative'>
                    <div className='absolute inset-0 pl-4 flex justify-center items-center w-2/3'>
                        <div>
                            <p>Only On Our Store</p>
                            <h2 className="UniversalHeadingText mt-3 mb-6">20% Off On Flower Pots</h2>
                            <Link className='Text-Primary font-Montserrat' to="/shop">
                                Shop Now
                                <HiArrowSmRight className="inline-block ml-1" />
                            </Link></div>
                    </div>
                    <div>
                        <img className='rounded-lg' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/new-product-sale-bg.png" alt="" />
                    </div>
                </div>


                <div className='Bg-Secondary rounded-lg flex justify-center items-center relative'>
                    <div className='absolute inset-0 pl-4 flex justify-center items-center w-2/3'>
                        <div>
                            <p>Collection of Plant</p>
                            <h2 className="UniversalHeadingText mt-3 mb-6">40% Off On Plant Pots</h2>
                            <Link className='Text-Primary font-Montserrat' to="/shop">
                                Shop Now
                                <HiArrowSmRight className="inline-block ml-1" />
                            </Link></div>
                    </div>
                    <div>
                        <img className='rounded-lg' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/new-product-sale-bg2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner02;