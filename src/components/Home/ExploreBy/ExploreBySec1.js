import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import PlaceHolder from "../../../assets/img/img-placeholder.jpg";
import Image from "../../../assets/img/image.jpg";

import img1 from "./../../../assets/img/tmp-img/R-881.png"
import img2 from "./../../../assets/img/tmp-img/R-882.png"
import img3 from "./../../../assets/img/tmp-img/R-883.png"
import img4 from "./../../../assets/img/tmp-img/R-884.png"

import img5 from "./../../../assets/img/tmp-img/exp-1.png"
import img6 from "./../../../assets/img/tmp-img/exp-2.png"
import img7 from "./../../../assets/img/tmp-img/exp-3.png"

const ExploreBySec1Component = ({}) => {
  const sec1Data = [
    { title: "Coronovirus 2021", img: img1},
    { title: "Nutrion", img: img2},
    { title: "parenthood", img: img3},
    { title: "woman's wellness", img: img4}
  ]

  const sec2Data = [
    { title: "physical HEALTH", img: img5},
    { title: "Lifestyle Tips", img: img6},
    { title: "Allergies", img: img7},
  ]
  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {/* overlay card */}
            <Card className="overlay-card">
              <Nav.Link>
                <Card.Img variant="top" src={sec1Data[idx].img} />
                <Card.Body>
                  <Card.Title>{sec1Data[idx].title}</Card.Title>
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
                        <Card.Img variant="top" src={sec2Data[idx].img} />
                      </Nav.Link>
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title>{sec2Data[idx].title}</Card.Title>
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
