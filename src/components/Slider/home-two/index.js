import React from 'react';
import parse from 'html-react-parser'
import Countdown from "react-countdown";
import Renderer from "../../UI/countdown/Renderer";
import { Link } from "react-router-dom";
import {Reveal} from 'react-reveal';



const Slider = () => {
    return (
        <div className={'slider-area slider-area--2'}>
            
            
                        <div >
                            <div className="slider-item"
                                 style={{backgroundImage: `url(${require('../../../assets/img/je2.jpg')})`}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 m-auto text-center">
                                            <div className="slider-content slider-content--2 light" >
                                                <Reveal top big>  
                                                    <div className='video-conainer' >
                                                        <h3 className='test'>Always Striving For Greatness</h3>
                                                        <h1>La 15éme édition du forum annuel de l'ENSI</h1>
                                                        <Countdown
                                                        date={new Date("November 28, 2020 8:30:00")}
                                                        renderer={Renderer}
                                                        />
                                                        <Link to='' className="btn-outline" style={{marginTop:"3%"}}>S'enregistrer</Link>
                                                    </div> 
                                                </Reveal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                
            
        </div>
    );
};

export default Slider;