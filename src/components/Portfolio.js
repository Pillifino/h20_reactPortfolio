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
    description: "This was my 2nd project in the coding camp. It's a music questionaire that allows a user to pick between genres and decade to find a song. Try it out!",
    link: "https://lit-oasis-project-2.herokuapp.com/"
  },
  {
    number: 2,
    title: "E-Commerce Backend",
    image: "e-commerce",
    description: "Backend project that focuses on Express, MySql, and insomnia to showcase understanding of CRUD operations. Watch the video!",
    link: "https://www.youtube.com/watch?v=R5NlXv3OmSA"
  },
  {
    number: 3,
    title: "Express Note Taker",
    image: "noteTaker",
    description: "A note taker that allows us to save and delete notes. Try it out!",
    link: "https://agile-cliffs-17930.herokuapp.com/"
  },
  {
    number: 4,
    title: "Team Profile Generator",
    image: "teamProfile",
    description: "Application that runs in Node that takes in information about employees in order to build a team profile. Watch the video!",
    link: "https://user-images.githubusercontent.com/98142990/166129984-c6f92dad-c0b2-46bf-b372-23791c157c23.mp4"
  },
];
function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((_, idx) => (
        <Col key={idx}>
          <Card>
            <a href={_.link} target={"_blank"}>
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
                {_.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;
