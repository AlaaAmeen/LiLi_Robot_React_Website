import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import homeLogo from '../../images/homeLogo.png'
import './style.css'

function NavbarMenu() {
    return (
        <div>
            <Navbar collapseOnSelect className = 'NavbarContainer' expand="lg" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="Home"><img src = {homeLogo} width="65" height="62"/></Navbar.Brand>
                    <Navbar.Brand href="Home" className = 'webTitle'>LiLi Robot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto webPages">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="#AboutContainer">About</Nav.Link>
                        <Nav.Link href="#ComponentssContainer">Components</Nav.Link>
                        <Nav.Link href="#HowToPlayContainer">How to Play</Nav.Link>
                        <Nav.Link href="#UpcomingGamesContainer">Upcoming Games</Nav.Link>
                        <Nav.Link href="#FeedbackContainer">Feedback</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMenu
