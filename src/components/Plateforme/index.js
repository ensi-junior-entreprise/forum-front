import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal,Fade } from 'react-reveal';
function Plateforme() {
  return (
    <>
    
    <div className="about-area-wrapper sm-top">
      <Container fluid>
          <Row>
            <Col lg="6" md="12">
              <Reveal left>
                {/*<ReactPlayer  width='100%' height='' loop={true} playing={true}  muted={true} url={require("../../assets/videos/forum2.mp4")} />*/}
                <img src={require("../../assets/img/Lobby.jpg")} />
              </Reveal>
            </Col>

            <Col lg="6" md="12" style={{textAlign:'center',paddingTop:'6%'}}>
            <Container >
              <Fade>
                <h2 className="title">La Plateforme</h2>
              </Fade>
              <Reveal bottom>
                <p className="description" >
                  Now UI Kit comes with 100 custom icons made by our friends from
                  NucleoApp. The official package contains over 2.100 thin icons
                  which are looking great in combination with Now UI Kit PRO Make
                  sure you check all of them and use those that you like the most.
                </p>
              </Reveal>
            </Container>
            </Col>
            

          </Row>
          </Container>
      </div>
      
    </>
  );
}

export default Plateforme;