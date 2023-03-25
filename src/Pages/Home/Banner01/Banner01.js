import React, { useEffect, useRef, useState } from 'react';
import leaf from "./Image/hero-section-img.png"
import flower from "./Image/flower-bg.png"
import { Link } from 'react-router-dom';
import { MdSlowMotionVideo } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { GrClose } from 'react-icons/gr';

const Banner01 = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='Bg-Gradient min-h-screen py-24 relative'>
            <img className="absolute top-0 scale-100 md:scale-50 lg:scale-100 opacity-20 md:opacity-50" src={flower} alt="" />
            <div className='UniversalMargin flex flex-col md:flex-row justify-center items-center'>
                <div className="w-full items-center justify-center">
                    <div>
                        <p className='text-xl font-bold'>Welcome To Nature World </p>

                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[70px] mt-8 leading-snug font-extrabold'>
                            Think <span className='Text-Primary'>Green</span> and Plant <span className='Text-Primary'>Something</span>
                        </h1>

                        <p className='mt-16'>Join the plant revolution and discover why more and more people are turning to nature to enhance their lives</p>

                        <div className='mt-8 space-x-3'>
                            <Link to="/shop" className='Btn-Primary'>Order Now <HiArrowSmRight className='ml-1 text-xl' /> </Link>
                            <button onClick={() => setShow(!show)} className='Btn-Outline'>Watch Video <MdSlowMotionVideo className='ml-1 text-xl font-bold' /></button>
                        </div>
                    </div>
                </div>
                <div className='w-[85%] m-2 bg-[#0068381A] mt-24 md:mt-0 rounded-full'>
                    <img className='w-full border-[20px] p-2 border-spacing-3 rounded-full opacity-90 border-[#0068381A]' src={leaf} alt='' />
                </div>
            </div>
            <div className={`absolute inset-0 flex justify-center bg-black bg-opacity-50 ${show ? "block" : "hidden"}`}>
                <GrClose onClick={() => { setShow(false); }} className={`cursor-pointer text-5xl text-white top-10 right-10 absolute ${show ? "block" : "hidden"}`} />

                <iframe className='rounded-lg' width="460" height="315" src={`${show ? "https://www.youtube.com/embed/kk4-NzpbXxw" : ""}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Banner01;