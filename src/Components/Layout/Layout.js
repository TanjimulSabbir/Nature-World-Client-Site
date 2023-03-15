import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Main from './Main';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;