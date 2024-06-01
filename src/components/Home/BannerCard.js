import React from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';

function BannerCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md={4}>
          <Image src={imgPath} alt={title} fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" href={ghLink} target="_blank">
              Link Here 
            </Button>
            {' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default BannerCard;