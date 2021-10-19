import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Activity = ({ activity }) => {
    const { name, Img, price, id, description } = activity
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
                <Nav.Link as={HashLink} to="/login" className="text-white navbar"><button className="btn-appoinment">booking shedule</button></Nav.Link>

            </Card>

        </CardGroup>
    );
};

export default Activity;