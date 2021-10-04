import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home" className="">
                    <h3>Debug IT</h3>
                </Navbar.Brand>
                <Nav>
                    <NavLink className="menu" to="/home" activeClassName="selected" activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}> Home
                    </NavLink>
                    <NavLink className="menu" to="/courses" activeClassName="selected" activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}> Courses
                    </NavLink>
                    <NavLink className="menu" to="/about" activeClassName="selected" activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}> About
                    </NavLink>
                    <NavLink className="menu" to="/contact" activeClassName="selected" activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}> Contact
                    </NavLink>
                </Nav >
            </Container >
        </Navbar >
    );
};

export default Header;