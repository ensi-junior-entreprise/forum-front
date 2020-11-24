import React from 'react';
import SectionTitle from "../../UI/SectionTitle";
import SlickSlider from "../../UI/Slick";
import Member from "./Member";
import {Reveal} from 'react-reveal';
import teamBg from '../../../assets/img/team/tec.png';
import Teams from '../../../data/Team/home-one';

function Team() {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        dots: true,
        className: "team-content-wrap slick-dots--light mtn-md-5",
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="team-area-wrapper bg-img sp-y" style={{backgroundImage: `url(${teamBg})`}} id="conferenciers">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Reveal bottom>
                            <SectionTitle variant="light" 
                                heading="<span style='color:#2EA3DD;'>Table ronde</span>"
                                text="Parmi les nouvelles tendances de l'e-santé, on peut citer l'augmentation humaine (Human augmentation) qui en effet est un sujet qui intrigue un très grand public de nos jours et qui lance les futurs ingénieurs vers un débat ainsi que des questions qui seront assez complexes afin de leur donner les clés d’analyse et de compréhension du monde."
                            />
                        </Reveal>
                    </div>

                    <div className="col-lg-8">
                        <Reveal right>
                            <SlickSlider settings={settings}>
                                {
                                    Teams.map(team => (
                                        <div key={team.id}>
                                            <Member id={team.id} name={team.name} designation={team.designation} profilePic={team.profilePic} />
                                        </div>
                                    ))
                                }
                            </SlickSlider>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;