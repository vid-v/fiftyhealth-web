import * as React from "react";
import { Nav } from "react-bootstrap";

const NavBarComponent = ({}) => {
  const navOptons = [
    "Health Conditions",
    "Mental Health",
    "Fitness",
    "Nutrition",
    "Health Care",
    "Wellness",
  ];

  return (
    <Nav className="mainNav">
      {navOptons.map((option, index) => {
        return <Nav.Link key={index}>{option}</Nav.Link>;
      })}
    </Nav>
  );
};

export default NavBarComponent;
