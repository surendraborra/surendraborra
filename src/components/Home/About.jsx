import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                   <span className="yellow"> ABOUT </span> MYSELF
                </h1>
                <p className="home-about-body">
                Hello, I am called <span className="yellow">Surendra Borra </span>
                I am originally from<span className="yellow"> Andhra Pradesh, INDIA.</span>
                <br />
                <br />
                I Achieved my Bachelor's degree in Computer Science and Engineering in 2022.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b> Inter Developer,  
                 
                I take pleasure in embracing fresh challenges and consistently broadening my range of skills.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> React, </b>
                    as well as have knowledge in programming languages such as  Java,
                  <b className="yellow"> Node.js,Express.js and PostgreSQL.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, PostgreSQL,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js.</b>
                  </i>
                  <br />
                  <br />
                  I am also keen on developing
                  <i>
                    <b className="yellow"> Web Applications . </b>
                    {/* as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b> */}
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FOLLOW ME ON</h1>
                <p>
               
              Feel free to contact me without any hesitation <span className="yellow"></span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/surendraborra/Surendra-Borra"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/surendra-borra-898829219/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/suri_since_2001/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About