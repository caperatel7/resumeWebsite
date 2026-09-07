import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import react from "../assets/img/react.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import nodejs from "../assets/img/nodejs.svg";
import vscode from "../assets/img/vscode.png";
import rust from "../assets/img/rust-white.svg";
import clickup from "../assets/img/clickup.svg";
import gitlab from "../assets/img/gitlab.svg";
import github from "../assets/img/github-white.svg";
import cicd from "../assets/img/cicd.svg";
import python from "../assets/img/python.png";
import figma from "../assets/img/figma.svg";
import sql from "../assets/img/sql.svg";
import docker from "../assets/img/docker.svg";

const skillIcons = [
  { src: react, alt: "React" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: nodejs, alt: "Node.js" },
  { src: vscode, alt: "VS Code" },
  { src: rust, alt: "Rust" },
  { src: clickup, alt: "ClickUp" },
  { src: gitlab, alt: "GitLab" },
  { src: github, alt: "GitHub" },
  { src: cicd, alt: "CI/CD" },
  { src: python, alt: "Python" },
  { src: figma, alt: "Figma" },
  { src: sql, alt: "SQL" },
  { src: docker, alt: "Docker" },
];

const jobs = [
  {
    role: "Full Stack Developer",
    company: "LegalEase",
    dates: "2022 - Present",
    description: "Building full-stack features with Node, React, and MySQL while designing IAM architectures, RBAC policies, and MFA/SSO solutions, and leading Agile ceremonies for a cross-functional team.",
    bullets: [
      "Built backend REST APIs with Node.js and normalized relational MySQL databases via phpMyAdmin.",
      "Designed IAM architectures, deployed MFA, and implemented SSO with OAuth alongside RBAC policies.",
      "Led Agile ceremonies (Sprint Reviews, Backlog Refinement) and managed code reviews via Jira and Bitbucket.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PCS Software",
    dates: "2020 - 2021",
    description: "Built a full-stack React/Redux platform with RESTful APIs, refined database schemas for scalability, and drove Agile/Scrum delivery across a cross-functional team.",
    bullets: [
      "Built a single-page application with React.js and Redux, integrating RESTful APIs and reusable components.",
      "Designed and refined database schemas to ensure normalized, scalable structures.",
      "Facilitated Agile/Scrum ceremonies and stakeholder meetings to align delivery with business goals.",
    ],
  },
];

const BASE_SPEED = 40; // px/sec, constant drift when idle
const MIN_HOVER_SPEED = 140; // px/sec, speed anywhere over the stream, even dead center
const MAX_HOVER_SPEED = 320; // px/sec, top speed when hovering an edge

const SkillStream = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const speedRef = useRef(-BASE_SPEED);
  const offsetRef = useRef(0);

  useEffect(() => {
    let rafId;
    let lastTime = performance.now();

    const tick = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const track = trackRef.current;
      if (track) {
        const loopWidth = track.scrollWidth / 2;
        offsetRef.current += speedRef.current * dt;
        if (offsetRef.current > 0) offsetRef.current -= loopWidth;
        if (offsetRef.current < -loopWidth) offsetRef.current += loopWidth;
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const relX = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const direction = relX < 0.5 ? -1 : 1;
    const intensity = Math.abs(relX - 0.5) * 2; // 0 at center .. 1 at an edge
    speedRef.current = direction * (MIN_HOVER_SPEED + intensity * (MAX_HOVER_SPEED - MIN_HOVER_SPEED));
  };

  const handleMouseLeave = () => {
    speedRef.current = -BASE_SPEED;
  };

  return (
    <div
      className="skill-stream"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-stream-track" ref={trackRef}>
        {skillIcons.concat(skillIcons).map((icon, index) => (
          <span className="skill-icon" key={index}>
            <img src={icon.src} alt={icon.alt} draggable="false" />
            <span className="skill-icon-tooltip" aria-hidden="true">{icon.alt}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Experience</h2>
            <SkillStream />
            <Row className="job-row">
              {jobs.map((job, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="job-item">
                    <h4>{job.role || "Role"}</h4>
                    <span className="job-company">{job.company || "Company"}</span>
                    {job.dates && <span className="job-dates">{job.dates}</span>}
                    {job.description && <p>{job.description}</p>}
                    {job.bullets && job.bullets.length > 0 && (
                      <ul className="job-bullets">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>}
        </TrackVisibility>
      </Container>
    </section>
  );
}
