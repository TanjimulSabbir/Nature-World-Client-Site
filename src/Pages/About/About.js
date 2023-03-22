import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner01 from './Banner01/Banner01';
import Banner02 from './Banner02/Banner02';
import Banner03 from './Banner03/Banner03';
import Banner04 from './Banner04/Banner04';
import AboutHeader from './Header/AboutHeader';

const About = () => {
    useTitle("About")
    return (
        <div>
            <AboutHeader></AboutHeader>
            <Banner01></Banner01>
            <Banner02></Banner02>
            <Banner03></Banner03>
            <Banner04></Banner04>
        </div>
    );
};

export default About;