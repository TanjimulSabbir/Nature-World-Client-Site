import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Products from "../../JsonFiles/Products.json"
import { AiOutlineHeart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


const Booking = () => {
    const getLocalItems = localStorage.getItem("AddToCart");
    const ParseItems = JSON.parse(getLocalItems);
    if (!ParseItems) {
        return <div className="min-h-screen flex justify-center items-center bg-green-100">
            <div>
                <h1>You haven't order yet.</h1>
                <Link className='mt-6 Btn-Outline' to="/shop"><FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2"></FontAwesomeIcon> Back To Shop</Link>
            </div>
        </div>
    }

    let IntigrateItems = []
    const showItem = Products.filter(product => {
        let MatchedItem = ParseItems?.find(prdt => prdt.id === product.id)

        if (MatchedItem) {
            return IntigrateItems.push({ ...product, ...MatchedItem })
        } else {
            return MatchedItem;
        }
    })
    console.log(IntigrateItems, typeof (ParseItems), 'Intrigration', "ParseItems")


    const TotalPrice = IntigrateItems.reduce((total, product) => {
        const price = parseFloat(product.price.split('$')[1]);
        const quantity = parseFloat(product.Quantity);
        const TotalPrice = total + price * quantity
        return TotalPrice;
    }, 0)

    console.log(TotalPrice, "TotalPrice")

    return (
        <div className="UniversalPadding py-24 bg-green-50 mid-lg:flex min-h-screen">
            <div className='grid grid-cols-1 space-y-16 w-full mid-lg:w-7/12'>
                {IntigrateItems.map(item => {
                    const { title, img, quantity, price } = item;

                    const Price = Number(price.split("$")[1])
                    return (
                        <div className='flex flex-col md:flex-row w-full py-4 bg-white shadow-2xl rounded-3xl items-center'>
                            <div>
                                <img src={img} alt='' />
                            </div>
                            <div className="flex flex-col">
                                <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
                                <h1 className='mt-6'>Price: ${Price}</h1>
                                <h1 className='mt-4'>Quantity: {quantity}</h1>
                                <h1 className='mt-5'>Total Amount: {Price * quantity}</h1>
                                <div className='mt-10 flex space-x-6 justify-center items-center'>

                                    <button className='Btn-Primary flex space-x-1 w-52 px-2'>
                                        <AiOutlineHeart className='text-lg text-gray-100 inline-block' /> <span>  Move to Wishlist</span>
                                    </button>
                                    <button></button>
                                    <BsTrash3 className='text-2xl inline-block cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className='w-full mid-lg:w-4/12 right-10 mx-auto sticky'>
                <div className='flex flex-col ml-12 space-y-2'>
                    <h1 className='text-center mb-8 text-3xl '>Order Summary</h1>
                    <div className='flex items-center justify-between'>
                        <h3>Order Items:</h3>
                        <h4>{IntigrateItems.length}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>Items Quantity:</h3>
                        <h4>{IntigrateItems.length}</h4>
                    </div>
                    <div className='flex items-center justify-between'><h3>SubTotal Price:</h3></div>
                    <div className='flex items-center justify-between'><h3>Shipping Charge:</h3></div>
                    <div className='flex items-center justify-between'><h3>Discount:</h3></div>
                    <div className='flex items-center justify-between'><h3>Estimate Tax:</h3></div>
                    <div className='flex items-center justify-between'><h3>Payment Amount:</h3></div>
                </div>
            </div>
        </div>
    );
};

export default Booking;