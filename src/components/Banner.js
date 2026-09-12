import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { useTypewriter } from "../hooks/useTypewriter";

const toRotate = [ "Full Stack Developer", "UX/UI Specialist", "Funniest Dev on Team" ];

export const Banner = () => {
  const text = useTypewriter(toRotate);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Kaija Collette,`}
                  <br />
                  <span className="txt-rotate"><span className="wrap">{text}</span></span>
                </h1>
                  <p>Sometimes seeing is believing! I can tell you I've put together web based
                     applications or we could break down the code & UI together!</p>
                  <p>Throughout the years I have become adept at troubleshooting complex technical
                     issues, collaborating across teams, and translating business requirements into
                     reliable software solutions. To this day I remain passionate about continuously
                     learning new technologies and delivering applications that provide a seamless
                     user experience!</p>
                  <HashLink to='#connect'>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}