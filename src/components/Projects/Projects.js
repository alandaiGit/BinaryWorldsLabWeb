import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerCard from "../Home/BannerCard";
import Particle from "../Particle";
import Amherst from "../../Assets/amherstLogo.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#c1440e" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row>
          <BannerCard
            imgPath={Amherst}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </Row>
        <Row>
          <BannerCard
            imgPath={Amherst}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </Row>
        <Row>
          <BannerCard
            imgPath={Amherst}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
