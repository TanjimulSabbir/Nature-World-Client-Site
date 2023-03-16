import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../Pages/Assets/NavBarLogo/PlantyLogo.png"
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer Bg-light-green text-black p-10 sm:flex sm:flex-col lg:flex-row lg:items-center lg:justify-evenly">
            <div className='lg:w-1/3'>
                <img src={Logo} alt="Plantly" />
                <p className='mt-6 font-lato'>Our website offers a wide range of plants, from hard-to-find specimens to popular favorites, all hand-selected for their quality and beauty. We also carry a variety of accessories, from stylish pots to essential plant care tools, to help you create the perfect environment for your green companions</p>
                <div className='mt-8 text-2xl flex space-x-4'>
                    <FiFacebook />
                    <AiOutlineTwitter />
                    <FaLinkedinIn />
                    <GrYoutube />
                </div>
            </div>

            <div>
                <span className="font-bold font-diplayFair">Quick Link</span>
                <a className="link link-hover font-lato">About Hotel</a>
                <a className="link link-hover font-lato">Terms & Conditionis</a>
                <a className="link link-hover font-lato">Jobs</a>
            </div>
            <div>
                <span className="font-bold font-diplayFair">Contact Info</span>
                <a className="link link-hover font-lato">Phone: +88953 445 4892</a>
                <a className="link link-hover font-lato">256, Resort Street,, New York 24</a>
                <a className="link link-hover font-lato">tanjimulislamsabbir02@gmail.com</a>
                <a className="link link-hover font-lato">info@paradisepalms.com</a>
            </div>
            <div>
                <span className="font-bold font-diplayFair">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 mb-10" />
                        <Link to="/" className="Btn-Primary" >Subscribe</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;