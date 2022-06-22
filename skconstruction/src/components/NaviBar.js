import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css"

export default class NaviBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bgColor" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SK Construction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link className="text-white" href="#features">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">About</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">Services</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">Projects</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">Contact Us</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Fr</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}