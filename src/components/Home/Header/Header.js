import React from 'react';
import './Header.css'
import logo from '../../../logo/logo.png'

import { Link, NavLink, } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (

        <div className="header" >
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hedar-navigation">
                <Nav.Link as={HashLink} to="/home#home" className="text-white navbar">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services" className="text-white navbar">services</Nav.Link>
                <Nav.Link as={HashLink} to="/catagory" className="text-white navbar">catagory</Nav.Link>
                <Nav.Link as={HashLink} to="/home#about" className="text-white navbar">Doctors</Nav.Link>
                <Nav.Link as={HashLink} to="/home#contacts" className="text-white navbar">contacts</Nav.Link>


            </div>
            <div>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">
                            <input type="text" name="" id="" />
                            <button>search</button>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>

    );
};

export default Header;