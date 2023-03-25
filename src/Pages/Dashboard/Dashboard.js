import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TiThLargeOutline } from "react-icons/ti";
import auth from '../../Components/Firebase/Firebase.init.config';
import useTitle from '../../Hooks/useTitle';

const Dashboard = () => {
    useTitle("Dashboard")
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [user] = useAuthState(auth)
    const location = useLocation();
    const pathName = location.pathname;
    const Hover = 'hover:bg-primary'


    const AdminUser = ["tanjimulislamsabbir02@gmail.com", "tanzimulislamsabbir@gmail.com"]
    let UserIsAdmin;
    if (AdminUser.includes(user?.email)) {
        UserIsAdmin = true
    }

    const Menu = <>
        {
            UserIsAdmin && <li>
                <Link className={`w-full ${Hover}`} to='/dashboard/alluser'>All User</Link>
            </li>
        }

        <li className='w-full rounded hover:bg-primary flex flex-row items-center justify-between'>
            <Link to='/booking'>All Booking</Link>
        </li>

    </>

    const DropDownBtn = <label title='Dashboard' tabIndex={0}
        onClick={() => setIsOpenMenu(!isOpenMenu)} className="btn bg-gray-800 md:bg-transparent hover:bg-[#097709] border-none cursor-pointer lg:hidden ">
        <TiThLargeOutline className='text-xl text-white' />
    </label>

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div class="absolute top-2 right-16 z-50">
                    <div class="dropdown dropdown-end relative">
                        {DropDownBtn}
                        <ul tabIndex={0} onClick={() => setIsOpenMenu
                            (!isOpenMenu)} className={`w-[300px] -mr-16 h-screen rounded-lg menu dropdown-content transition bg-base-100 shadow-2xl text-black ${isOpenMenu ? 'block' : "hidden"}`}>
                            {Menu}
                        </ul>
                    </div>
                </div>

                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-100">
                        {Menu}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;



