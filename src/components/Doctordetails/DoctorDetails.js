import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const [doctor, setDoctor] = useState({})
    const { doctorId } = useParams()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/doctors.json')
            .then(res => res.json())
            .then(data => {
                const doctors = data.find(pd => pd.id == doctorId)
                setDoctor(doctors)
            })
    }, [doctorId])
    console.log(doctor)
    return (
        <div className="doctor-container">
            <h2 className="text-warning">{doctorId}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={doctor.img} alt="" />
                    <h2>{doctor.name}</h2>
                </div>
                <div className="col-md-6">
                    <h5>discription:{doctor.description}</h5>
                </div>


            </div>
        </div>
    );
};

export default DoctorDetails;