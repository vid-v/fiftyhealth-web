import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import Skin from "../../../assets/img/skin.jpg";

const FeatureComponent = ({}) => {
  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {/* video card */}
            <Card className="video-card small-height">
              <Nav.Link>
                <Card.Img variant="top" src={Skin} />
              </Nav.Link>
              <Card.Body>
                <Card.Title>Skin Care</Card.Title>
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
