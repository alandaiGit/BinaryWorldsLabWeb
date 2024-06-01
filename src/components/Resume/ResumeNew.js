import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ProjectCard from "../Projects/ProjectCards";
import Amherst from "../../Assets/amherstLogo.png";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Contact <strong className="purple"> me </strong>
        </h1>
        <p style={{ color: "#c1440e" }}>
          2 grid place holders for information
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
