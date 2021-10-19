import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (

        <div>
            <div>
                <h2 className="text-success heading">our Activities</h2>
                <hr />
            </div>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;