import * as React from "react";
import { Container, Nav } from "react-bootstrap";
import Arrow from "../../../assets/img/next.svg";
import VideoComponent from "./video";
const VideosComponent = ({}) => {
  return (
    <section style={{ background: "#f7f7f7" }}>
      <Container>
        <div className="sectionHeading">
          <h2>Videos</h2>
          <Nav.Link>
            View All <img src={Arrow} alt="toggle" />
          </Nav.Link>
        </div>
        <VideoComponent />
      </Container>
    </section>
  );
};

export default VideosComponent;
