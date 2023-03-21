import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import leaf from "./Svg/leaf-vector.svg"
import Products from "../../../JsonFiles/Products.json"
import Page from './Page';

const Banner03 = () => {
    const navigate = useNavigate;
    const location = useLocation();
    const path = location.pathname;
    const [CurrentPage, setCurrentPage] = useState(1)
    const [showProducts, setShowProducts] = useState([])
    const ProductPerPage = 8

    useEffect(() => {
        const endIndex = CurrentPage * ProductPerPage
        const startIndex = endIndex - ProductPerPage
        setShowProducts(Products?.slice(startIndex, endIndex))
        console.log(showProducts, startIndex, endIndex, "startIndex and EndIndex")
    }, [CurrentPage])

    console.log(showProducts, CurrentPage, "showProducts, CurrentPage")
    return (
        <div className='Bg-Gradient UniversalPadding py-24'>
            <div className='mt-10'>
                <div className={`flex justify-center items-center flex-col relative ${path === "/" ? "block" : "hidden"}`} >
                    <img className='w-28 h-28 absolute bottom-4' src={leaf} alt="" />
                    <h1 className='UniversalHeadingText'>New <span className='Text-Primary'>Product</span></h1>
                </div>

                <div className='grid mt-8 justify-center items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6'>
                    {
                        showProducts?.map((product, index) => {
                            return (
                                <div key={index}
                                    className='relative Bg-light-green mt-14 pb-14 flex justify-center items-center border border-[#00683821] rounded-lg w-full 
                                    h-[600px] cursor-pointer'>
                                    <div>
                                        <div className='flex justify-center items-center'>
                                            <img className='' src={product?.img} alt="" />
                                        </div>

                                        <div className='mt-8 px-3'>
                                            <h1 className='text-xl text-center'>{product?.title}</h1>
                                            <h3 className='text-xl text-center mt-3'>{product?.price}</h3>
                                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                                <Link className='Btn-Primary w-full px-5'
                                                    to={`/shop/${product?.id}`}>Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Page setCurrentPage={setCurrentPage} CurrentPage={CurrentPage} AllData={Products} ProductPerPage={ProductPerPage}></Page>
        </div>
    );
};

export default Banner03;