import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import Skin from "../../../assets/img/skin.jpg";

import img1 from './../../../assets/img/tmp-img/feature-1.png';
import img2 from './../../../assets/img/tmp-img/feature-2.png';
import img3 from './../../../assets/img/tmp-img/feature-3.png';
import img4 from './../../../assets/img/tmp-img/feature-4.png';

const FeatureComponent = ({}) => {
  const data = [
    { title: "NUTRITION", img: img1},
    { title: "MENTAL HEALTH", img: img2},
    { title: "TRAVEL", img: img3},
    { title: "SKIN CARE", img: img4}
  ]

  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {data.map((d, idx) => (
          <Col>
            {/* video card */}
            <Card className="video-card small-height">
              <Nav.Link>
                <Card.Img variant="top" src={d.img} />
              </Nav.Link>
              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Title>
                  <h3>
                    <Nav.Link>
                      These Essential Oils Will Work Wonders For Dry Skin.
                    </Nav.Link>
                  </h3>
                </Card.Title>
                <Card.Text>
                  Experiencing dry skin? These oils are exactly what you need.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureComponent;
