import * as React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import Logo from "../../assets/img/logo.svg";
import Email from "../../assets/img/icon-email.svg";
import Fb from "../../assets/img/icon-facebook.svg";
import Twitter from "../../assets/img/icon-twitter.svg";
import Pintrest from "../../assets/img/icon-pinterest.svg";
class AppFooter extends React.Component {
  render() {
    return (
      <section style={{ background: "#f7f7f7" }}>
        <footer>
          <Container>
            <Row>
              <Col md="8">
                <Row>
                  <Col md="8">
                    <Card className="newsLetter footerNewsletter">
                      <Card.Title>Get Our Wellness Newsletter</Card.Title>
                      <span>Tips, stories, health news, and more</span>
                      <Card.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Enter your email"
                            />
                          </Form.Group>
                          <div className="gap-2">
                            <Button variant="primary" type="submit">
                              Sign Up Now
                            </Button>
                          </div>
                          <span class="card-links">
                            Your <Card.Link href="#">privacy</Card.Link> is
                            important to us
                          </span>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="4">
                <Navbar.Brand href="#home">
                  <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Row>
                  <Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="/home">About Us</Nav.Link>
                      <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
                      <Nav.Link eventKey="link-2">Newsletters</Nav.Link>
                      <Nav.Link eventKey="disabled">Terms Of Use</Nav.Link>
                    </Nav>
                  </Col>
                  <Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="/home">Health Topics</Nav.Link>
                      <Nav.Link eventKey="link-1">Advertise</Nav.Link>
                      <Nav.Link eventKey="link-2">Health News</Nav.Link>
                      <Nav.Link eventKey="disabled">Privacy Policy</Nav.Link>
                    </Nav>
                  </Col>
                </Row>
                <Nav defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="">
                      <img src={Fb} alt="Facebook" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">
                      <img src={Twitter} alt="Twitter" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">
                      <img src={Pintrest} alt="Pintrest" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">
                      <img src={Email} alt="Email" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <span class="copyRight">
              © 2021 Fifty Plus Health. All rights reserved. Our website,
              services, content, and products are for informational purposes
              only. Fifty Plus Health does not provide medical advice,
              diagnosis, or treatment.{" "}
              <Nav.Link href="#">See additional information.</Nav.Link>
            </span>
          </Container>
        </footer>
      </section>
    );
  }
}

export default AppFooter;
