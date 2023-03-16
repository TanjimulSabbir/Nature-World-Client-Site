import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import leaf from "./Svg/leaf-vector.svg"
import Products from "../../../JsonFiles/Products.json"


const Banner03 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let AllProducts
    const path = location.pathname
    console.log(path, "path")
    if (path === "/") {
        AllProducts = Products.slice(0, 4)
    } else {
        AllProducts = Products
    }

    return (
        <div className='Bg-Gradient UniversalPadding py-24'>
            <div>
                <div className='flex justify-center items-center flex-col' >
                    <img className='w-28 h-28' src={leaf} alt="" />
                    <h1 className='UniversalHeadingText'>New <span className='Text-Primary'>Product</span></h1>
                </div>

                <div className='grid mt-8 space-y-10 md:space-y-0 md:space-x-6 grid-cols-1 md:grid-cols-2 mid-lg:grid-cols-3 lg:grid-cols-4'>
                    {
                        AllProducts.map(product => {
                            return (
                                <div key={product?.title}>
                                    <div onClick={() => navigate("/shop")} className='Bg-Secondary mt-14 relative rounded-lg h-[500px] shadow-2xl cursor-pointer'>
                                        <img className='' src={product?.img} alt="" />

                                        <div className='absolute top-[60%] mx-4 space-y-3'>
                                            <h1 className='text-xl text-center'>{product?.title}</h1>
                                            <h3 className='text-xl text-center'>{product?.price}</h3>
                                            <Link className='Btn-Primary absolute top-28 w-full mx-auto' to="/shop">Add to Cart</Link>
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

export default Banner03;