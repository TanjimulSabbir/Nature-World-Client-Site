import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useBooking from '../../../../Hooks/useBooking';
import { DBContext } from '../../../DataBaseContext/UserDBProvider';
import PageLoading from '../../Loading/Loading';

const ShoppingCart = () => {
    const { BookingCart } = useContext(DBContext);
    const [AllBooking, isLoading] = useBooking();


    const [isOpen, setIsOpen] = useState(false)
    let TotalItems = 0;
    const TotalPrice = AllBooking?.reduce((total, product, i) => {
        const price = parseFloat(product.price.split('$')[1]);
        const quantity = parseFloat(product.Quantity);
        TotalItems = TotalItems + quantity
        const TotalPrice = total + price * quantity
        return TotalPrice;
    }, 0)
    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div className="dropdown dropdown-end">
            <label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className=''>
                <div className="indicator cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{AllBooking?.length}</span>
                </div>
            </label>
            <div tabIndex={0} onClick={() => setIsOpen(false)} className={`card dropdown-content text-black bg-white shadow-2xl rounded-box w-64 ${isOpen ? "block" : "hidden"}`}>
                <div className="card-body">
                    <h2 className="card-title font-diplayFair font-bold">{AllBooking?.length} {AllBooking?.length > 1 && 'items' || 'item'}</h2>
                    <p className='font-openSans '>Your Total Amount is ${TotalPrice.toFixed(4)}.</p>
                    <p className='font-openSans '>You have Added to Cart {AllBooking?.length} Product{AllBooking?.length > 1 && 's'} and Total {TotalItems} Items.</p>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;