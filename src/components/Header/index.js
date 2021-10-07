import * as React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Toggle from "../../assets/img/toggle.svg";
import Search from "../../assets/img/search.svg";
import NavBarComponent from "./NavBar";

const Header = ({}) => {
  return (
    <header className="header">
      <div className="header-top">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col>
              <div className="toggleIcon">
                <img src={Toggle} alt="toggle" />
              </div>
            </Col>
            <Col>
              <div className="logoMain">
                <Navbar.Brand href="#home">
                  <img src={Logo} alt="logo" />
                </Navbar.Brand>
              </div>
            </Col>
            <Col>
              <div className="searchIcon">
                <img src={Search} alt="search" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-bottom">
        <Container>
          <NavBarComponent />
        </Container>
      </div>
    </header>
  );
};

export default Header;
