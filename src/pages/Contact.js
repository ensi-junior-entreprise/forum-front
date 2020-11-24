import React,{Fragment,useState} from 'react';
import ContactPage from "../templates/Contact";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar';


const PageContact = () => {
    
    return (
        <Fragment>
            <ContactPage/>
            <Footer/>
        </Fragment>
    );
};

export default PageContact;