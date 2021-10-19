import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctor">
            <div>
                <h2>our specialist</h2>
            </div>
            <div className="service-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;