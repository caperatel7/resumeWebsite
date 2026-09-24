import { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ArchitectureDiagram = lazy(() =>
  import("./ArchitectureDiagram").then((module) => ({ default: module.ArchitectureDiagram }))
);

const REPO = "https://github.com/caperatel7/resumewebsite";

const parts = [
  {
    title: "1. Runtime & Bootstrap",
    definition: `flowchart TD
  node_html["HTML document<br/>browser shell<br/>[index.html]"]
  node_entry["React entry<br/>app bootstrap<br/>[index.js]"]
  node_globalcss["Global styles<br/>stylesheet<br/>[index.css]"]

  node_html -->|"loads bundle"| node_entry
  node_entry -->|"imports"| node_globalcss

  click node_html "${REPO}/blob/main/public/index.html" _blank
  click node_entry "${REPO}/blob/main/src/index.js" _blank
  click node_globalcss "${REPO}/blob/main/src/index.css" _blank

  classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
  class node_html,node_entry,node_globalcss toneBlue`,
  },
  {
    title: "2. UI Composition",
    definition: `flowchart TD
  node_app["App<br/>page composition<br/>[App.js]"]
  node_navbar["NavBar<br/>in-page navigation<br/>[NavBar.js]"]
  node_banner["Banner<br/>hero section<br/>[Banner.js]"]
  node_typewriter["useTypewriter<br/>animation hook<br/>[useTypewriter.js]"]
  node_divider["SectionDivider<br/>layout component<br/>[SectionDivider.js]"]
  node_footer["Footer<br/>[Footer.js]"]
  node_appcss["App styles<br/>stylesheet<br/>[App.css]"]

  node_app -->|"renders"| node_navbar
  node_app -->|"renders"| node_banner
  node_app -->|"separates sections"| node_divider
  node_app -->|"renders"| node_footer
  node_app -->|"imports"| node_appcss
  node_banner -->|"uses"| node_typewriter

  click node_app "${REPO}/blob/main/src/App.js" _blank
  click node_navbar "${REPO}/blob/main/src/components/NavBar.js" _blank
  click node_banner "${REPO}/blob/main/src/components/Banner.js" _blank
  click node_typewriter "${REPO}/blob/main/src/hooks/useTypewriter.js" _blank
  click node_divider "${REPO}/blob/main/src/components/SectionDivider.js" _blank
  click node_footer "${REPO}/blob/main/src/components/Footer.js" _blank
  click node_appcss "${REPO}/blob/main/src/App.css" _blank

  classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
  class node_app,node_navbar,node_banner,node_typewriter,node_divider,node_footer,node_appcss toneAmber`,
  },
  {
    title: "3. Content & Assets",
    definition: `flowchart TD
  node_experience["Experience<br/>content section<br/>[Experience.js]"]
  node_projects["Projects<br/>project list<br/>[Projects.js]"]
  node_projectcard["ProjectCard<br/>project presentation<br/>[ProjectCard.js]"]
  node_contact["Contact<br/>content section<br/>[Contact.js]"]
  node_assets["Images<br/>bundled assets"]
  node_fonts["Fonts<br/>bundled assets"]
  node_resume["Resume PDF<br/>public artifact"]
  node_cname["Custom domain marker<br/>deployment artifact"]

  node_projects -->|"renders"| node_projectcard

  click node_experience "${REPO}/blob/main/src/components/Experience.js" _blank
  click node_projects "${REPO}/blob/main/src/components/Projects.js" _blank
  click node_projectcard "${REPO}/blob/main/src/components/ProjectCard.js" _blank
  click node_contact "${REPO}/blob/main/src/components/Contact.js" _blank
  click node_assets "${REPO}/tree/main/src/assets/img" _blank
  click node_fonts "${REPO}/tree/main/src/assets/font" _blank
  click node_resume "${REPO}/blob/main/public/KaijaCollette-2025Resume.pdf" _blank
  click node_cname "${REPO}/blob/main/public/CNAME" _blank

  classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
  classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
  class node_experience,node_projects,node_projectcard,node_contact toneMint
  class node_assets,node_fonts,node_resume,node_cname toneRose`,
  },
];

export const Architecture = () => {
  return (
    <section className="architecture-section" id="architecture">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Architecture</h2>
            <p className="architecture-intro">
              How this site is put together, broken into three parts. Click any node to jump straight to that file on GitHub.
            </p>
            <Row className="justify-content-center">
              {parts.map((part) => (
                <Col xs={12} lg={4} key={part.title}>
                  <Suspense fallback={<p className="tab-placeholder">Loading diagram...</p>}>
                    <ArchitectureDiagram title={part.title} definition={part.definition} />
                  </Suspense>
                </Col>
              ))}
            </Row>
          </div>}
        </TrackVisibility>
      </Container>
    </section>
  );
};
