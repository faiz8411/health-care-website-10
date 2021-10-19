import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, description, img, price, schedule } = doctor;
    return (
        <div>
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

                </Card>
            </CardGroup>
            <Link to={`/doctor/${id}`}><button className="btn-appoinment">click for details</button></Link>
        </div>
    );
};

export default Doctor;