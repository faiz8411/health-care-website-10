import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServicDetails = () => {

    const [detail, setDetails] = useState({})
    const { serviceId } = useParams()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/service.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(pd => pd.id == serviceId)
                setDetails(details)
            })
    }, [serviceId])
    console.log(detail)

    return (
        <div>
            <h2>service id:{serviceId}</h2>
            <div className="row mt-4">
                <div className="col-md-6">
                    <img className="img-fluid" src={detail.Img} alt="" />
                    <h2>{detail.name}</h2>
                    <h4>price:{detail.price}</h4>
                </div>
                <div className="col-md-6">
                    <h5>description:{detail.description}</h5>
                    <Form className="from-appointment">
                        <Form.Group className="mb-3 text-warning" controlId="formBasicEmail">
                            <Form.Label>
                                <h2>submit and fillup this form</h2><i class="fas fa-location-arrow"></i>
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

                    </Form>


                </div>
            </div>
        </div>
    );
};

export default ServicDetails;