// Form Imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Card Import
import Card from "react-bootstrap/Card";
function Contact() {
  return (
    <Card>
        <Card.Header>Contact Me</Card.Header>
      <Card.Body>
        <Card.Title>Contact Form</Card.Title>
        <Card.Text>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Contact;
