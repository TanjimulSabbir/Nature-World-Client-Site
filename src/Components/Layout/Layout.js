import React from 'react';
import AuthProvider from '../AuthContext/AuthProvider';
import UserDBProvider from '../DataBaseContext/UserDBProvider';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Main from './Main';

const Layout = () => {
    return (
        <div>
            <AuthProvider>
                <UserDBProvider>
                    <Header></Header>
                    <Main></Main>
                    <Footer></Footer>
                </UserDBProvider>
            </AuthProvider>

        </div>
    );
};

export default Layout;