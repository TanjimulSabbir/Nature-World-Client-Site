import React, { useState } from 'react';
import NavbarAvator from './NavbarAvator';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init.config';
import { BiSearch } from "react-icons/bi";
import Logo from "../../../Pages/Assets/NavBarLogo/PlantyLogo.png"
import ShoppingCart from './ShopingCart/ShoppingCart';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [sidebar, setSidebar] = useState(false)


    const btnStyle = "font-semibold transition hover:bg-transparent hover:Text-Primary duration-100"
    const Menu = <>
        <li><NavLink className={btnStyle} to="/">Home</NavLink></li>
        <li><NavLink className={btnStyle} to="/b">About Us</NavLink></li>
        <li><NavLink className={btnStyle} to="/c">Shop</NavLink></li>
        <li><NavLink className={btnStyle} to="/d">Blog</NavLink></li>
        <li><NavLink className={btnStyle} to="/e">Contact Us</NavLink></li>
        <li><NavLink className={btnStyle} to="/f"><ShoppingCart /></NavLink></li>
        <li><NavLink className={`text-2xl ${btnStyle}`} to="/g"><BiSearch /></NavLink></li>
    </>

    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost mid-lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Menu}
                    </ul>
                </div>
                <Link className='UniversalMargin' to="/"><img src={Logo} alt="" /> </Link>
            </div>
            <div className="navbar-center py-2 mr-4 hidden mid-lg:flex mid-lg:justify-center">
                <ul className="menu menu-horizontal text-black">
                    {Menu}
                </ul>
            </div>
            <NavbarAvator></NavbarAvator>
        </div>
    )
};

export default Navbar;