import React,{Fragment} from 'react';
import socialNetworks from '../../data/SocialNetworks/socials'

const ContactInfo = ({address}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
                <img src={require('../../assets/img/logo/whie.png')} width="100%"/>
            </div>
        </Fragment>
    );
};

export default ContactInfo;