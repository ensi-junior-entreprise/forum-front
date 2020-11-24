import Countdown from "react-countdown";
import React from 'react'
import ReactPlayer from 'react-player' 
import Renderer from "../UI/countdown/Renderer";
import { Link } from "react-router-dom";
import useIsInViewport from 'use-is-in-viewport'
import Animation from '../Animation'
import {Reveal} from 'react-reveal';
export default function Video (props) {   
            

        return (     
            <> 
                <div className="video-text" style={{textAlign:"center"}} id="accueil">
                    <Reveal top big>  
                        <div className='video-conainer' >
                            <h3 className='test' >Always Striving For Greatness</h3>
                            <h1>La 15ème édition du forum annuel de l'ENSI</h1>
                            <Countdown
                            date={new Date("November 28, 2020 8:30:00")}
                            renderer={Renderer}
                            />
                            <Link to={`${process.env.PUBLIC_URL }/register`} className="btn-outline" style={{marginTop:"3%"}}>S'inscrire</Link>
                        </div> 
                    </Reveal>  
                </div> 
            </>
        )
    }