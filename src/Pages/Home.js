import React from 'react';
import useTitle from '../Hooks/useTitle';
import Banner01 from './Home/Banner01/Banner01';
import Banner02 from './Home/Banner02/Banner02';
import Banner03 from './Home/Banner03/Banner03';
import Banner04 from './Home/Banner04/Banner04';
import Banner05 from './Home/Banner05/Banner05';
import Banner06 from './Home/Banner06/Banner06';
import Banner07 from './Home/Banner07/Banner07';
import Banner08 from './Home/Banner08/Banner08';

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner01></Banner01>
            <Banner02></Banner02>
            <Banner03></Banner03>
            <Banner04></Banner04>
            <Banner05></Banner05>
            <Banner06></Banner06>
            <Banner07></Banner07>
            <Banner08></Banner08>
        </div>
    );
};

export default Home;