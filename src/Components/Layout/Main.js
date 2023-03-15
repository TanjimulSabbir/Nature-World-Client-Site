import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mt-[86px]'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;