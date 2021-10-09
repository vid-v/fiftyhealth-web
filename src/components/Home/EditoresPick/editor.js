import * as React from "react";
import { Card, Col, Row, Nav, Form, Button } from "react-bootstrap";
import Medical from "../../../assets/img/medical.jpg";
import Jaare from "../../../assets/img/jaare.jpg";

import img1 from "./../../../assets/img/tmp-img/ed-pick-1.png";
import img2 from "./../../../assets/img/tmp-img/ed-pick-2.png";
import img3 from "./../../../assets/img/tmp-img/ed-pick-3.png";
import img4 from "./../../../assets/img/tmp-img/ed-pick-4.png";
import img5 from "./../../../assets/img/tmp-img/ed-pick-5.png";
import img6 from "./../../../assets/img/tmp-img/ed-pick-6.png";

const EditorPickComponent = ({}) => {
  const data = [
    { title: "How CBD is Reinventing Medicine As We Know It.", img: img1},
    { title: "Tips for Relieving Stress During a Hectic Week.", img: img2},
    { title: "Tips for Relieving Stress During a Hectic Week.", img: img3},
    { title: "How Trips To The Beach Can Improve Your Outlook On Life.", img: img4},
    { title: "How to Fit Self-Care Into Your Daily Routine.", img: img5},
    { title: "Multi-Tasking is a Myth: Here’s the Truth About Productivity.", img: img6},
  ]

  return (
    <div className="sectionContent">
      <Row className="g-5 pt-3">
        <Col md="9">
          <Row className="flex-column">
            {data.map((d, idx) => (
              <Col className="mb-5">
                {/* small card */}
                <Card className="small-card">
                  <Row>
                    <Col md={3}>
                      <Nav.Link>
                        <Card.Img variant="top" src={d.img} />
                      </Nav.Link>
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title>Category tag</Card.Title>
                        <Card.Title>
                          <h3>
                            <Nav.Link>
                              {d.title}
                            </Nav.Link>
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          Try incorporating this into your weekly routine to
                          account for everything you’ve done so far...
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md="3">
          <div className="addDemo">
            <img src={Jaare} alt="" />
          </div>
          <Card className="newsLetter mt-5">
            <Card.Text>Sign Up</Card.Text>
            <Card.Title>Wellness Newsletter</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Sign Up Now
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorPickComponent;
