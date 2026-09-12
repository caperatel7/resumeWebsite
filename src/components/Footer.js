import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kaija-collette-ms-81b184b6" target="_blank" rel="noopener noreferrer"> <img src={navIcon1} alt="LinkedIn Icon" />  </a>
              <a href="https://github.com/caperatel7?tab=repositories" target="_blank" rel="noopener noreferrer"> <img src={githubIcon} alt="GitHub Icon" />  </a>
            </div>
            <p>A Kaija Collette Product</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
