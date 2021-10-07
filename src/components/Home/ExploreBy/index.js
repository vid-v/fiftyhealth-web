import * as React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ExploreBySec1Component from "./ExploreBySec1";
import Arrow from "../../../assets/img/next.svg";
import { Link } from "react-router-dom";
const ExploreByComponent = ({}) => {
  return (
    <section>
      <Container>
        <div className="sectionHeading">
          <h2>Exported By</h2>
          {/* <Nav.Link>
            View All <img src={Arrow} alt="toggle" />
          </Nav.Link> */}
        </div>
        <ExploreBySec1Component />
      </Container>
    </section>
  );
};

export default ExploreByComponent;
