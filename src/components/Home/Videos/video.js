import * as React from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";

import video1 from "../../../assets/img/video-1.png";
import video2 from "../../../assets/img/video-2.png";
import video3 from "../../../assets/img/video.jpg";

import Play from "../../../assets/img/play.svg";

const VideoComponent = ({}) => {

  const video = [
    video1,
    video2,
    video3
  ]

  return (
    <div className="sectionContent">
      <Row xs={1} sm={2} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            {/* video card */}
            <Card className="video-card">
              <Nav.Link>
                <Card.Img variant="top" src={video[idx]} />
                <img src={Play} alt="play" class="playBtn" />
              </Nav.Link>
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Title>
                  <h3>
                    <Nav.Link>
                      Behind the Scenes: Mason Paul’s Plans to Extend the Human
                      Lifespan
                    </Nav.Link>
                  </h3>
                </Card.Title>
                <Card.Text>
                  Humans may be one step closer to immortality with this new
                  method to live longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoComponent;
