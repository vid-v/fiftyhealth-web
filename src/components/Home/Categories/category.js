import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import PlaceHolder from "../../../assets/img/img-placeholder.jpg";
import Image from "../../../assets/img/image.jpg";
import Travel from "../../../assets/img/travel.jpg";

import img1 from "../../../assets/img/tmp-img/nutritionimg.png";
import img2 from "../../../assets/img/tmp-img/mentalhealthimg.png";
import img4 from "../../../assets/img/tmp-img/skncrimg.png";
import img3 from "../../../assets/img/tmp-img/trvlimg.png";

const CategoryComponent = ({}) => {
  const data = [
    { title: "NUTRITION", img: img1},
    { title: "MENTAL HEALTH", img: img2},
    { title: "TRAVEL", img: img3},
    { title: "SKIN CARE", img: img4}
  ]

  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={4} className="g-4">
        {data.map((item, idx) => (
          <Col>
            {/* overlay card */}
            <Card className="overlay-card big-height">
              <Nav.Link>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
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
