import React from 'react';
import {Link} from "react-router-dom";

function ServiceItem(props) {
    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`
    return (
        
            <div className="service-item">
                <figure className="service-thumb">
                    
                        <img src={require('../../assets/img/' + props.thumb)} alt={props.title}/>
                    

                    <figcaption className="service-txt">
                        <h5>{props.title}</h5>
                    </figcaption>
                </figure>
                <div className="service-content">
                    <div className="service-content-inner">
                        <h5>
                            {props.title}
                        </h5>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        
    );
}

export default ServiceItem;