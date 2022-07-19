import React from "react";
// BootStrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const projects = [
  {
    number: 1,
    title: "Music Questionnaire",
    image: "dotify",
    link: "https://lit-oasis-project-2.herokuapp.com/"
  },
  {
    number: 2,
    title: "E-Commerce Backend",
    image: "e-commerce",
    link: "https://www.youtube.com/watch?v=R5NlXv3OmSA"
  },
  {
    number: 3,
    title: "Express Note Taker",
    image: "noteTaker",
    link: "https://agile-cliffs-17930.herokuapp.com/"
  },
  {
    number: 4,
    title: "Team Profile Generator",
    image: "teamProfile",
    link: "https://user-images.githubusercontent.com/98142990/166129984-c6f92dad-c0b2-46bf-b372-23791c157c23.mp4"
  },
];
function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((_, idx) => (
        <Col key={idx}>
          <Card>
            <a href={_.link}>
            <Card.Img
              variant="top"
              src={require("../images/" + _.image + ".jpg")}
              className="img-fluid"
              alt="_.title"
            />
            </a>
            <Card.Body>
              <Card.Title>{_.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;
