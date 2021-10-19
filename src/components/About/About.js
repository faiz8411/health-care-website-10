import React from 'react';
import { Card } from 'react-bootstrap';
import aboutPic from '../../about/download.jfif'
import './About.css'

const About = () => {
    return (
        <div>
            <h2>About us:</h2>
            <div className="speacial-container pb-4 mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <img src={aboutPic} alt="" />
                        <h2>West Chester Health Center</h2>

                    </div>


                    <div className="col-md-6">

                        <ul className="about-list">
                            <li>Maintaining our patient’s/client’s individuality, dignity, and confidentiality while providing compassionate, cost-effective, readily available, and courteous service. </li>
                            <li>Continuing our leadership position as the preferred partner for all aspects of healthcare Provider placement and staffing services, education, and research, as determined by the needs of the communities we serve. </li>
                            <li>Developing an atmosphere that encourages efficiency, loyalty, collegiality, and fairness in all our endeavors. </li>
                            <li>Fostering a professional, collegial, and loyal relationship with our healthcare Provider partners. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;