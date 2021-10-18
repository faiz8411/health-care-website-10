import React from 'react';
import './Footer.css'
import logo2 from '../../../logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookMedical, faCoffee, faFileContract, faHome, faLocationArrow, faPhone, faSearch, faSearchLocation, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    const element = <FontAwesomeIcon icon={faHome} />
    const element1 = <FontAwesomeIcon icon={faSearch} />
    const element2 = <FontAwesomeIcon icon={faBookMedical} />
    const element3 = <FontAwesomeIcon icon={faFileContract} />
    const element4 = <FontAwesomeIcon icon={faVoicemail} />
    const element5 = <FontAwesomeIcon icon={faPhone} />
    const element6 = <FontAwesomeIcon icon={faSearchLocation} />
    return (

        <div className="footer-container mt-4">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="left-container text-start">
                            <img src={logo2} alt="" />

                        </div>
                        <div>
                            <p className="mt-4 text-white ">

                                <small>West Chester Health Center</small>

                            </p>

                            <p className="mt-5 text-white">
                                <p>© 2021 UC Health.</p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white navbar">{element}Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white navbar">{element1}services</Nav.Link>
                        <Nav.Link as={HashLink} to="/catagory" className="text-white navbar">{element2}catagory</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="text-white navbar">{element3}Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contacts" className="text-white navbar">{element4}contacts</Nav.Link>
                    </div>
                    <div className="col-md-6">
                        <div className="right-footer-container">
                            <h3 className="text-white">More informationt about addmission</h3>
                            <input
                                className="footer-input"
                                type="text"
                                placeholder="Enter Email"
                            />
                            <div className="phone d-flex align-items-center justify-content-center mt-4">

                                <div>
                                    <h5 className="text-warning">{element5} phone:+880177633256</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">

                                <div>
                                    <p className="text-white">
                                        {element6} Address: london, 1345
                                        <br /> uk ,Esat london
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};


export default Footer;