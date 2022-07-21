import React from 'react';
// CSS Imports
import '../Styles/About.css';
// React Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import me from '../images/me.jpg'

const styles = {
  headerStyle: {
    backgroundColor: 'Grey',
    color: 'White',
    fontSize: '2rem',
  },
  bodystyle: {
    backgroundColor: 'darkgrey',
    color: 'White',
    fontSize: '1.5rem'
  }
};

function About(props) {
  return (
    <Container>
      <Row className='row-container'>
        <Col sm={8} className='about-box'>
    <Card border="dark" className='border'>
        <Card.Header style={styles.headerStyle}>About Me</Card.Header>
        <Card.Body style={styles.bodystyle}>
          <Card.Text>
          Hello! My Name Is Dino Dizon and I am a junior software developer. I am currently enrolled in the UW Coding Camp program. I look forward to adding onto my skillset in hopes of becoming a fulltime software engineer!
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col sm={4} className='image-box'><img src={me} width="100%" alt = "this is an image of me" className='me'></img></Col> 
      </Row>
    </Container>
  );
}

export default About;