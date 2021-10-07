import * as React from "react";
import { Container, Nav } from "react-bootstrap";
import Arrow from "../../../assets/img/next.svg";
import EditorPickComponent from "./editor";
const EditorsPickComponent = ({}) => {
  return (
    <section>
      <Container>
        <div className="sectionHeading">
          <h2>Editor's Pick</h2>
          <Nav.Link>
            View All <img src={Arrow} alt="toggle" />
          </Nav.Link>
        </div>
        <EditorPickComponent />
      </Container>
    </section>
  );
};

export default EditorsPickComponent;
