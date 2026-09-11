import { useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolioPreview from "../assets/img/readMePreview.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Astronaut = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const movePupil = (eyeRef, pupilRef, clientX, clientY) => {
      const eyeEl = eyeRef.current;
      const pupilEl = pupilRef.current;
      if (!eyeEl || !pupilEl) return;

      const rect = eyeEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const angle = Math.atan2(dy, dx);
      const maxOffset = rect.width * 0.22;
      const distance = Math.min(maxOffset, Math.hypot(dx, dy) / 8);

      pupilEl.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    };

    const handleMouseMove = (e) => {
      movePupil(leftEyeRef, leftPupilRef, e.clientX, e.clientY);
      movePupil(rightEyeRef, rightPupilRef, e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="astronaut">
      <svg viewBox="0 0 240 300" width="240" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="astroVisorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
          <linearGradient id="astroSuitShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e4e0f2" />
          </linearGradient>
        </defs>

        {/* backpack */}
        <rect x="88" y="190" width="64" height="70" rx="18" fill="#d7d2ea" />

        {/* body */}
        <path d="M75 185 Q120 160 165 185 L172 250 Q120 285 68 250 Z" fill="url(#astroSuitShade)" stroke="#d7d2ea" strokeWidth="2" />
        <circle cx="120" cy="222" r="10" fill="#c9c2e6" />
        <path d="M86 195 L100 222 L84 249" stroke="#AA367C" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M154 195 L140 222 L156 249" stroke="#4A2FBD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* arms */}
        <path d="M75 195 Q50 205 45 235" stroke="url(#astroSuitShade)" strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M165 195 Q190 205 195 235" stroke="url(#astroSuitShade)" strokeWidth="26" strokeLinecap="round" fill="none" />
        <circle cx="43" cy="240" r="15" fill="#ffffff" />
        <circle cx="197" cy="240" r="15" fill="#ffffff" />

        {/* neck ring */}
        <rect x="100" y="168" width="40" height="16" rx="8" fill="#c9c2e6" />

        {/* helmet */}
        <circle cx="120" cy="100" r="92" fill="#ffffff" />
        <circle cx="120" cy="100" r="92" fill="none" stroke="#d7d2ea" strokeWidth="5" />
        <ellipse cx="120" cy="106" rx="66" ry="60" fill="url(#astroVisorGradient)" />
        <path d="M62 90 Q75 55 118 48" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="10" strokeLinecap="round" fill="none" />

        {/* eyes */}
        <g>
          <ellipse ref={leftEyeRef} cx="96" cy="104" rx="17" ry="19" fill="#ffffff" />
          <circle ref={leftPupilRef} cx="96" cy="104" r="7.5" fill="#1a1a2e" />
        </g>
        <g>
          <ellipse ref={rightEyeRef} cx="144" cy="104" rx="17" ry="19" fill="#ffffff" />
          <circle ref={rightPupilRef} cx="144" cy="104" r="7.5" fill="#1a1a2e" />
        </g>
      </svg>
    </div>
  );
};

export const Projects = () => {

  const projects = [
    {
      title: "Resume Portfolio",
      description: "React • Personal Portfolio Site",
      imgUrl: portfolioPreview,
      link: "https://kaijacollette.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Personal Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Resume Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">More Soon</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p className="tab-placeholder">More soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <Astronaut />
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}