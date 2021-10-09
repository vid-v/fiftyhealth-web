import * as React from "react";
import { Container, Nav } from "react-bootstrap";
import Arrow from "../../../assets/img/next.svg";
import CategoryComponent from "./category";
const CategoriesComponent = ({}) => {
  return (
    <section>
      <Container>
        <div className="sectionHeading">
          <h2>Categories</h2>
          <Nav.Link>
            View All <img src={Arrow} alt="toggle" />
          </Nav.Link>
        </div>
        <CategoryComponent />
      </Container>
    </section>
  );
};

export default CategoriesComponent;
