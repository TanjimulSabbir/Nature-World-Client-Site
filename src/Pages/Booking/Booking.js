import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import useBooking from '../../Hooks/useBooking';
import PageLoading from '../../Components/Shared/Loading/Loading';
import { DBContext } from '../../Components/DataBaseContext/UserDBProvider';
import { MdDone } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Components/Firebase/Firebase.init.config';


const Booking = () => {
    const [user] = useAuthState(auth);
    const { BookingDelete } = useContext(DBContext);
    // const getLocalItems = localStorage.getItem("AddToCart");
    // const ParseItems = JSON.parse(getLocalItems);
    const [AllBooking, isLoading] = useBooking();

    if (isLoading) {
        return <PageLoading></PageLoading>
    }

    if (!user) {
        return <div className="min-h-screen flex justify-center items-center bg-green-100">
            <div>
                <h1 className='ml-6'>No User Logged In</h1>
                <Link className='mt-6 Btn-Outline' to="/login"><FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2"></FontAwesomeIcon> Back To Login</Link>
            </div>
        </div>
    }
    if (user && !AllBooking?.length) {
        return <div className="min-h-screen flex justify-center items-center bg-green-100">
            <div>
                <h1>You haven't order yet.</h1>
                <Link className='mt-6 Btn-Outline' to="/shop"><FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2"></FontAwesomeIcon> Back To Shop</Link>
            </div>
        </div>
    }


    // let IntigrateItems = []
    // const showItem = Products.filter(product => {
    //     let MatchedItem = ParseItems?.find(prdt => prdt.id === product.id)

    //     if (MatchedItem) {
    //         return IntigrateItems.push({ ...product, ...MatchedItem })
    //     } else {
    //         return MatchedItem;
    //     }
    // })

    let TotalItems = 0;
    const TotalPrice = AllBooking?.reduce((total, product, i) => {
        const price = parseFloat(product.price.split('$')[1]);
        const quantity = parseFloat(product.Quantity);
        TotalItems = TotalItems + quantity
        const TotalPrice = total + price * quantity
        return TotalPrice;
    }, 0)

    const SubTotal = Number((TotalPrice)?.toFixed(3));
    const Shipping = Number((TotalPrice * .12)?.toFixed(3));
    const Discount = Number((TotalPrice * .2)?.toFixed(3));
    const Tax = Number((TotalPrice * .15)?.toFixed(3));
    const PaymentAmout = Number((SubTotal + Shipping + Tax) - Discount)?.toFixed(4)

    console.log(TotalPrice, TotalItems, "TotalPrice", "TotalItems")

    return (
        <div className="UniversalPadding py-24 bg-green-50 mid-lg:flex min-h-screen">

            <div className='grid grid-cols-1 space-y-16 w-full mid-lg:w-7/12'>
                <h1 className='text-xl font-extrabold mb-10'>Recently, You have Ordered this Products!</h1>
                {AllBooking?.map(item => {
                    const { id, title, img, } = item;
                    console.log(id, "items")
                    const Price = parseFloat(item.price.split('$')[1]);
                    const Quantity = parseFloat(item.Quantity);
                    if (isLoading) {
                        return <PageLoading></PageLoading>
                    }
                    return (
                        <div className='flex flex-col md:flex-row w-full 
                        py-10 mid-lg:py-6 bg-white shadow-2xl rounded-3xl items-center'>
                            <div>
                                <img className='' src={img} alt='' />
                            </div>
                            <div className="flex flex-col mid-lg:w-full lg:w-auto">
                                <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
                                <h1 className='mt-10 '>
                                    <span>Price: </span>
                                    <span> ${Price}</span>
                                </h1>
                                <h1 className='mt-4 '>
                                    <span>Quantity:</span>
                                    <span> {Quantity}</span>
                                </h1>
                                <h1 className='mt-5 '>
                                    <span>Total Amount:</span>
                                    <span> ${Price * Quantity}</span>
                                </h1>
                                <h2 className='mt-4 flex text-[12px] space-x-1'>
                                    <div className='flex items-center'>
                                        <MdDone className='border rounded-full text-white bg-[#019801] font-bold' />
                                        <span>Delivery:</span>
                                    </div>
                                    <span> Free</span>
                                </h2>

                                <div className='mt-8 flex space-x-14 mid-lg:space-x-4 justify-start items-center'>

                                    <button className='btn flex space-x-1 btn-sm'>
                                        <AiOutlineHeart className='text-lg text-gray-100 inline-block' /> <span>  Move to Wishlist</span>
                                    </button>
                                    <BsTrash3 onClick={() => BookingDelete({ id, title })} className='border text-red-600 px-2 shadow-md rounded-md text-4xl inline-block cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className='max-w-md shadow-2xl max-h-screen mid-lg:w-4/12 mid-lg:ml-16 lg:ml-24 rounded-lg mx-auto mt-24 mid-lg:mt-0'>
                <div className='flex flex-col p-5 space-y-2'>
                    <h1 className='text-center mb-8 text-3xl Text-Primary'>Order Summary</h1>
                    <div className='flex items-center justify-between'>
                        <h3>Order Items:</h3>
                        <h4>{AllBooking?.length}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>Total Items Quantity:</h3>
                        <h4>{TotalItems}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>SubTotal Price:</h3>
                        <h4>${SubTotal}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>Shipping Charge:</h3>
                        <h4>${Shipping}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>Discount:</h3>
                        <h4>${Discount}</h4>
                    </div>
                    <div className='flex items-center justify-between border-b-2 pb-3 border-emerald-600'>
                        <h3>Estimate Tax:</h3>
                        <h4>${Tax}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3>Payment Amount:</h3>
                        <h4>${PaymentAmout}</h4>
                    </div>
                    <div className='w-full'>
                        <Link className='w-full Btn-Primary mt-14' to="/payment">Pay Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;