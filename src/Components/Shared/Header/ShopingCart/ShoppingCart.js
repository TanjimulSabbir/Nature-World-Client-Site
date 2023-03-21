import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const getLocalItems = localStorage.getItem("AddToCart");
    const ParseItems = JSON.parse(getLocalItems);

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className=''>
                <div className="indicator cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{ParseItems?.length}</span>
                </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content justify-center items-center w-60 bg-base-100 shadow">
                <div className="card-body text-black">
                    <span className="font-bold text-lg">{ParseItems?.length || 0} Items</span>
                    <span className="text-green-600">Subtotal: $999</span>
                    <div className="card-actions mt-5">
                        <Link to="/booking" className="Btn-Primary w-full">View cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;