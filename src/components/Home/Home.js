import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

/*line 14 with the <Particle /> creates the small white dots */

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 20 }} className="heading" >
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Binary
                <strong className="main-name"> Worlds Lab</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col>
            <iframe src='https://my.spline.design/finalversion-e826d55bdc1c4af0f4486824fafa1cbe/' frameborder='0' width='400px' height='400px'></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
