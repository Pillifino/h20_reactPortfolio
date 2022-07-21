import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/mailto:dinodizon073100@gmail.com" target={"_blank"}>
            dinodizon073100@gmail
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://github.com/Pillifino"
            target={"_blank"}
            eventKey="link-1"
          >
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/bernarddinodizon?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKwE%2FoLloTbe8bsYKy8WLFQ%3D%3D"
            target={"_blank"}
            eventKey="link-2"
          >
            LinkedIn
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.facebook.com/profile.php?id=100004644075736"
            target={"_blank"}
            eventKey="link-3"
          >
            Facebook
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;
