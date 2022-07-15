import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
        Hello! My Name Is Dino Dizon and I am a junior software developer. I am currently enrolled in the UW Coding Camp program. I look forward to adding onto my skillset in hopes of becoming a fulltime software engineer!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;