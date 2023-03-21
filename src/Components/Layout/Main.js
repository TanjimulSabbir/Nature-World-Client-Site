import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../AuthContext/AuthProvider';
import UserDBProvider from '../DataBaseContext/UserDBProvider';

const Main = () => {
    return (
        <div className='mt-[86px]'>
            <AuthProvider>
                <UserDBProvider>
                    <Outlet></Outlet>
                </UserDBProvider>
            </AuthProvider>
        </div>
    );
};

export default Main;