import React from 'react';
import './Header.css'
import logo from '../../../logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const element = <FontAwesomeIcon icon={faSearch} />
    const { user, logOut } = useAuth()
    return (

        <div className="header" >
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hedar-navigation">
                <Nav.Link as={HashLink} to="/home#home" className="text-white navbar">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/service" className="text-white navbar">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/catagory" className="text-white navbar">Catagory</Nav.Link>
                <Nav.Link as={HashLink} to="specialist" className="text-white navbar">Specialist</Nav.Link>
                <Nav.Link as={HashLink} to="/about" className="text-white navbar">About</Nav.Link>
                {user.email ?
                    <button onClick={logOut} className="btn btn-danger">
                        LogOut
                    </button> :
                    <Nav.Link as={HashLink} to="/login" className="text-white navbar">Login</Nav.Link>}


            </div>
            <div>
                <Navbar>
                    <Container>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="text-white">
                                {user?.email &&
                                    <span> Welcome: {user?.displayName}</span>}
                            </Navbar.Text>
                        </Navbar.Collapse>
                        <Navbar.Brand href="#home" className="m-2">
                            <input className=" search-Input" type="text" name="" id="" placeholder="search" />
                            <button className=" search-Input">{element}</button>
                        </Navbar.Brand>
                        <Navbar.Toggle />

                    </Container>
                </Navbar>
            </div>

        </div>

    );
};

export default Header;