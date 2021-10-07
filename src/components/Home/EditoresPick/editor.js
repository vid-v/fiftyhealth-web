import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import Medical from "../../../assets/img/medical.jpg";
import Jaare from "../../../assets/img/jaare.jpg";
const EditorPickComponent = ({}) => {
  return (
    <div className="sectionContent">
      <Row className="g-5 pt-3">
        <Col md="9">
          <Row className="flex-column">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="mb-5">
                {/* small card */}
                <Card className="small-card">
                  <Row>
                    <Col md={3}>
                      <Nav.Link>
                        <Card.Img variant="top" src={Medical} />
                      </Nav.Link>
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title>Category tag</Card.Title>
                        <Card.Title>
                          <h3>
                            <Nav.Link>
                              How CBD is Reinventing Medicine As We Know It.
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
        </Col>
      </Row>
    </div>
  );
};

export default EditorPickComponent;