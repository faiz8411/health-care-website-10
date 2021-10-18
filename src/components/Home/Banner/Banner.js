import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import { Carousel, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../banner/666-1.png'

import './Banner.css'

const Banner = () => {
    const element = <FontAwesomeIcon icon={faLocationArrow} />

    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <h2 className="text-warning">West Chester Health Center</h2>
                        <h5 className="text-white">As one of the Greater Cincinnati area's newer hospitals <br />, West Chester Hospital was designed with our patients' comfort in mind.</h5>
                        <h4 className="text-warning">if you need any medical emergency then</h4>
                        <button className="btn btn-success">appointment here {element}</button>
                    </div>
                    <div className="col-md-4">
                        <Form className="from-appointment">
                            <Form.Group className="mb-3 text-warning" controlId="formBasicEmail">
                                <Form.Label>
                                    <h2> Booking Apoinment</h2><i class="fas fa-location-arrow"></i>
                                </Form.Label>
                                <Form.Control type="email" placeholder="Patient name?" />
                                <Form.Control type="email" placeholder="Patient email?" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password ?" />
                                <Form.Control type="email" placeholder="your problem ?" />
                                <Form.Control type="email" placeholder="which doctor to see you?" />
                            </Form.Group>

                            <Button className="btn btn-success" variant="primary" type="submit">
                                Submit
                            </Button>
                            <p className="text-white">are you new in this website???<Link className="text-warning">Register</Link></p>
                        </Form>

                    </div>
                </div>
            </div>


        </div>

    );
};

export default Banner;