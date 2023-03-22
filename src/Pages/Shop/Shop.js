import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner01 from './Banner01/Banner01';
import ShopHeader from './ShopHeader/ShopHeader';

const Shop = () => {
    useTitle("Shop")
    return (
        <div>
            <ShopHeader></ShopHeader>
            <Banner01></Banner01>
        </div>
    );
};

export default Shop;