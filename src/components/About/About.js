import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Amherst from "../../Assets/amherstLogo.png";
import labLogo from "../../Assets/BinaryWorldsLabLogo.png";


import ProjectCard from "../Projects/ProjectCards";




function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">We</strong> Are 
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={labLogo} alt="about" className="img-fluid" />
          </Col>
        </Row>
          <h1 className="lab-members-title">
          Lab<strong className="purple"> Members </strong> 
          </h1>
      </Container>


      <Container fluid className="project-section">
      <Container>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amherst}
              title = "Student Name"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"

            />
          </Col>
        </Row>
      </Container>
      </Container>
     
    </Container>

  );
}

export default About;
