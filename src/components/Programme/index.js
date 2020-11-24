import React from 'react'
import { Col} from 'react-bootstrap'
import TimelineWrap from '../Timeline'
import Timeline from '../Timeline/TimelineItem'
import SectionTitle from '../UI/SectionTitle'
import { Reveal,Fade } from 'react-reveal';

export default function Programme() {
    return (
        <>
            <div className="member-details-bottom" style={{paddingTop:'3%',paddingBottom:'7%'}} id='programme'>
                
                    <div className="col-xl-6 m-auto text-center" >
                        <div className="member-education mem-achieve-item">
                        <Fade big>
                        <SectionTitle
                            heading={'Programme'}

                        /></Fade>
                    </div>
                
                    <div className="col-12" style={{paddingTop:'2%'}}>
                        <div className="education-content-wrap mt-60" style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}>
                            <Col xs='4' >
                            <Reveal left>
                            <TimelineWrap icon={'amphitheatre.png'} title={'Auditorium'} >
                                
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'food-stand.png'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'workshop.png'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />

                            </TimelineWrap>
                            </Reveal>
                            </Col>
                            <Col xs='4' > 
                            <Reveal bottom>
                            <TimelineWrap icon={'food-stand.png'} title={'Stand'} >
                            
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                               
                            </TimelineWrap>
                            </Reveal> 
                            </Col>
                            <Col xs='4' >
                            <Reveal right>
                            <TimelineWrap icon={'workshop.png'} title={'Workshop'}>
                                
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Début'}
                                    duration={'8h30'}
                                />
                                
                            </TimelineWrap>
                            </Reveal>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
