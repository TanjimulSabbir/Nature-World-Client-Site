import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import Banner03 from './Banner03';
import ContactHeader from './ContactHeader';

const Contact = () => {
    useTitle("Contact")
    return (
        <div>
            <ContactHeader></ContactHeader>
            <Banner01></Banner01>
            <Banner02></Banner02>
            <Banner03></Banner03>
        </div>
    );
};

export default Contact;