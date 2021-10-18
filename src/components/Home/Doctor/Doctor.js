import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, description, img, price, schedule } = doctor;
    return (
        <CardGroup>
            <Card className="m-2" >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                        <h5 className="text-warning">service time: {schedule}</h5>

                    </Card.Title>
                    <Card.Text>
                        <p>{description}</p>

                    </Card.Text>
                </Card.Body>
                <Link><button className="btn-success">click for details</button></Link>
            </Card>
        </CardGroup>
    );
};

export default Doctor;