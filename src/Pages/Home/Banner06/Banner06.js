import React from 'react';
import leaf from "./Svg/leaf-vector.svg"
import AllNews from "../../../JsonFiles/News.json"
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';

const Banner06 = () => {

    return (
        <div className='UniversalPadding bg-base-100 py-24'>
            <div>
                <div className='mt-10'>
                    <div className='flex justify-center items-center flex-col relative' >
                        <img className='w-28 h-28 absolute bottom-4' src={leaf} alt="" />
                        <h1 className='UniversalHeadingText'>Latest <span className='Text-Primary'>News</span></h1>
                    </div>
                </div>
                <div className="mt-14 grid justify-center items-center grid-cols-1 md:grid-cols-2 mid-lg:grid-cols-3 gap-x-10 gap-y-16 mid-lg:gap-x-6">
                    {
                        AllNews.map(news => {
                            return (
                                <div className="card card-compact mt-10 w-full h-full bg-base-100 shadow-xl">
                                    <figure><img src={news.img} alt={news.title} /></figure>
                                    <div className="card-body mt-8">
                                        <h2 className="card-title">{news.title}</h2>
                                        <p>{news.description}</p>
                                        <div className="card-actions justify-start">
                                            <Link to="/about" className='Btn-Primary px-5'>Read More <HiArrowSmRight className='ml-1 text-xl' /> </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner06;