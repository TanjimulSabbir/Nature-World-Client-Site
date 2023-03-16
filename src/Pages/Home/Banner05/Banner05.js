import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import leaf from "./Svg/leaf-vector.svg"
import Products from "../../../JsonFiles/Products.json"
import flower from "./flower-bg.png"


const Banner05 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let AllProducts
    const path = location.pathname
    console.log(path, "path")
    if (path === "/") {
        AllProducts = Products.slice(0, 8)
    } else {
        AllProducts = Products
    }

    return (
        <div className='Bg-Gradient UniversalPadding py-24 relative'>
            <img className='absolute -top-12 -ml-40 opacity-50 scale-75' src={flower} alt="" />
            <div className='mt-10'>
                <div className='flex justify-center items-center flex-col relative' >
                    <img className='w-28 h-28 absolute bottom-4' src={leaf} alt="" />
                    <h1 className='UniversalHeadingText'>Trending <span className='Text-Primary'>Product</span></h1>
                </div>

                <div className='grid mt-8 justify-center items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6'>
                    {
                        AllProducts.map(product => {
                            return (
                                <div key={product.title} onClick={() => navigate("/shop")}
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
                                                <Link className='Btn-Primary w-full px-5' to="/shop">Add to Cart</Link>
                                            </div>
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

export default Banner05;