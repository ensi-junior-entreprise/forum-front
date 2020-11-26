import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import socialNetworks from '../../data/SocialNetworks/socials'

const ContactInfo = ({address}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
                <Link to="/"><img src={require('../../assets/img/logo/whie.png')} width="100%"/></Link>
            </div>
        </Fragment>
    );
};

export default ContactInfo;