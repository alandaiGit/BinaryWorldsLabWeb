import React from "react";
import { Container, Row} from "react-bootstrap";
import BannerCard from "./BannerCard";
import Amherst from "../../Assets/amherstLogo.png";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 className="lab-members-title">
        Current<strong className="purple"> Work </strong>
      </h1>
      <Container>
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

export default Home2;
