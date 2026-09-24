import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
//import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github-white.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as="div">
          <a
            href="/KaijaCollette-2025Resume.pdf"
            download="KaijaCollette-2025Resume.pdf"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button className="nav-cta"><span>Download CV</span></button>
          </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#architecture" className={activeLink === 'architecture' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('architecture')}>Architecture</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kaija-collette-ms-81b184b6/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="linkedin"/>
                </a>
                <a href="https://github.com/caperatel7?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github"/>
                </a>
                {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
              <HashLink to='#connect'>
                <button className="nav-cta"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}