import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import PlaceHolder from "../../../assets/img/img-placeholder.jpg";
import Image from "../../../assets/img/image.jpg";
import Family from "../../../assets/img/family.jpg";

const ExploreBySec1Component = ({}) => {
  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {/* overlay card */}
            <Card className="overlay-card">
              <Nav.Link>
                <Card.Img variant="top" src={PlaceHolder} />
                <Card.Body>
                  <Card.Title>Coronovirus 2021</Card.Title>
                </Card.Body>
              </Nav.Link>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-5 mt-2">
        <Col>
          {/* big card */}
          <Card className="big-card">
            <Nav.Link>
              <Card.Img variant="top" src={Image} />
            </Nav.Link>
            <Card.Body>
              <Card.Title>Pain Relief</Card.Title>
              <Card.Title>
                <h3>
                  <Nav.Link>
                    Try These 8 Yoga Positions to Relieve Lower Back Pain.
                  </Nav.Link>
                </h3>
              </Card.Title>
              <Card.Text>
                Experiencing worsening back pain? Yoga is a proven scientific
                approach to relieving pain which dates back centuries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="5">
          <Row className="flex-column">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col className="mb-5">
                {/* small card */}

                <Card className="small-card">
                  <Row>
                    <Col md={5}>
                      <Nav.Link>
                        <Card.Img variant="top" src={Family} />
                      </Nav.Link>
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title>physical Helath</Card.Title>
                        <Card.Title>
                          <h3>
                            <Nav.Link>
                              How Spending More Time Outside Boosts Seratonin
                              Levels.
                            </Nav.Link>
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          With time spent outside decreasing on average.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ExploreBySec1Component;
