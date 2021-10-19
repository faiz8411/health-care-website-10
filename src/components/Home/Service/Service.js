import React from 'react';
import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, description, price, Img } = service;


    return (


        <CardGroup>
            <Card className="m-2" >
                <Card.Img variant="top" src={Img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                        <h5 className="text-warning">service cost: {price}</h5>

                    </Card.Title>
                    <Card.Text>
                        <p>{description}</p>

                    </Card.Text>
                </Card.Body>
                <Link to={`/service/${id}`}><button className="btn-success">click for details</button></Link>
            </Card>

        </CardGroup>
    );
};

export default Service;