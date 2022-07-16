import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import me from '../../images/me.jpg'

function About(props) {
  return (
    <Container>
      <Row>
        <Col sm={8}>
    <Card border="light" style={{ width: '100%', height:'100%' }}>
        <Card.Header className='header'>About Me</Card.Header>
        <Card.Body style={{backgroundColor:'orange', color:'white'}}>
          <Card.Text style={{fontSize:'1.5rem' }}>
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