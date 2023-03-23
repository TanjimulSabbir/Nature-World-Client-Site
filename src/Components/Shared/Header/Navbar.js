import React, { useState } from 'react';
import NavbarAvator from './NavbarAvator';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init.config';
import { BiSearch } from "react-icons/bi";
import Logo from "../../../Pages/Assets/NavBarLogo/PlantyLogo.png"
import ShoppingCart from './ShopingCart/ShoppingCart';
import { FiAlignJustify } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';


const Navbar = () => {
    const [search, setSearch] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    const btnStyle = "font-semibold transition hover:bg-primary hover:md:bg-transparent hover:text-white hover:md:Text-Primary duration-100 cursor-pointer"
    const Menu = <>
        <li><NavLink className={btnStyle} to="/">Home</NavLink></li>
        <li><NavLink className={btnStyle} to="/about">About Us</NavLink></li>
        <li><NavLink className={btnStyle} to="/shop">Shop</NavLink></li>
        <li><NavLink className={btnStyle} to="/blog">Blog</NavLink></li>
        <li><NavLink className={btnStyle} to="/contact">Contact Us</NavLink></li>
        <li><NavLink className={btnStyle} to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink className={btnStyle} to="#"><ShoppingCart /></NavLink></li>
        <li><NavLink onClick={() => setSearch(!search)} className={`text-2xl ${btnStyle}`} to="#"><BiSearch />
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-white relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <label onClick={() => setSidebar(!sidebar)} tabIndex={0} className="btn btn-ghost mid-lg:hidden">
                        {
                            sidebar ? <GrClose className='text-2xl' /> : <FiAlignJustify className='text-2xl' />
                        }
                    </label>
                    <ul onClick={() => setSidebar(false)} tabIndex={0} className={`menu menu-compact dropdown-content mt-2 p-2 -ml-2 shadow-2xl bg-base-100 rounded-box w-[300px] min-h-screen ${sidebar ? "block" : "hidden"}`}>
                        {Menu}
                    </ul>
                </div>
                <Link className='UniversalMargin' to="/"><img src={Logo} alt="" /> </Link>
            </div>
            <div className={`navbar-center py-2 mr-4 hidden mid-lg:flex mid-lg:justify-center ${sidebar ? "block" : "hidden"}`}>
                <ul className="menu menu-horizontal text-black">
                    {Menu}
                </ul>
            </div>
            <NavbarAvator></NavbarAvator>

            {search &&
                <div className='absolute top-0 inset-0 flex justify-center items-center w-screen min-h-screen bg-black bg-opacity-80'>

                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <GrClose title='close' onClick={() => setSearch(false)} className='text-3xl p-1 inset-0 mb-20 cursor-pointer rounded-full bg-white' />
                </div>
            }
        </div>
    )
};

export default Navbar;