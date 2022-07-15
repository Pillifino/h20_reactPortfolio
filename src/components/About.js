import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import me from '../images/me.jpg'

function About(props) {
  return (
    <Container>
      <Row>
        <Col sm={8}>
        <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
        Hello! My Name Is Dino Dizon and I am a junior software developer. I am currently enrolled in the UW Coding Camp program. I look forward to adding onto my skillset in hopes of becoming a fulltime software engineer!
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}><img src={me} alt = "this is an image of me"></img></Col> 
      </Row>
    </Container>
  );
}

export default About;