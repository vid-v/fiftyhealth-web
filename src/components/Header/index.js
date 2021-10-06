import * as React from 'react';
import { Container, PopoverHeader } from 'react-bootstrap';
import logo from "../../assets/img/brand/logo.svg";
import NavBarComponent from './NavBar';

const Header = ({ }) => {
    return (
        <header className="app-header">
            <Container className="header">
                <img src={logo} alt="logo" />
            </Container>
            <NavBarComponent />
        </header>
    );
}

export default Header;
