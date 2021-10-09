import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import PlaceHolder from "../../../assets/img/img-placeholder.jpg";
import Image from "../../../assets/img/image.jpg";
import Travel from "../../../assets/img/travel.jpg";

const CategoryComponent = ({}) => {
  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {/* overlay card */}
            <Card className="overlay-card big-height">
              <Nav.Link>
                <Card.Img variant="top" src={Travel} />
                <Card.Body>
                  <Card.Title>Travel</Card.Title>
                </Card.Body>
              </Nav.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryComponent;
