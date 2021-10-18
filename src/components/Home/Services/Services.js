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

        <div id="services">
            <div>
                <h2>our services</h2>
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