import * as React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import FeatureComponent from "./featured";
import Arrow from "../../../assets/img/next.svg";
const FeaturedComponent = ({}) => {
  return (
    <section>
      <Container>
        <div className="sectionHeading">
          <h2>Featured</h2>
          <Nav.Link>
            View All <img src={Arrow} alt="toggle" />
          </Nav.Link>
        </div>
        <FeatureComponent />
      </Container>
    </section>
  );
};

export default FeaturedComponent;
