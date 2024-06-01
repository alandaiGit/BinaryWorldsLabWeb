import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLinkedin } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant = "top" src={props.imgPath} alt="card-img" className="rounded" />
      <Card.Body>
      <Card.Title style={{color:"black", fontSize:"25px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "black" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsLinkedin /> &nbsp;
          {props.isBlog ? "Blog" : "LinkedIn"}
        </Button>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
