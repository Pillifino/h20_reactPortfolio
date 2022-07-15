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
        {/* <Card border='dark' style={{ width: '100%', height: '100%'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}}>About Me</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        Hello! My Name Is Dino Dizon and I am a junior software developer. I am currently enrolled in the UW Coding Camp program. I look forward to adding onto my skillset in hopes of becoming a fulltime software engineer!
        </Card.Text>
      </Card.Body>
    </Card> */}
    <Card border="light" style={{ width: '100%', height:'100%' }}>
        <Card.Header style={{backgroundColor:'black', color:'white', fontSize:'30px'}}>About Me</Card.Header>
        <Card.Body style={{backgroundColor:'orange', color:'white'}}>
          <Card.Text style={{fontSize:'22px' }}>
          Hello! My Name Is Dino Dizon and I am a junior software developer. I am currently enrolled in the UW Coding Camp program. I look forward to adding onto my skillset in hopes of becoming a fulltime software engineer!
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col sm={4}><img src={me} width="100%" alt = "this is an image of me"></img></Col> 
      </Row>
    </Container>
    
  );
}

export default About;