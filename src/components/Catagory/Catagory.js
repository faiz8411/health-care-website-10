import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Category.css'

import cate1 from '../../speciality/download.png'
import cate2 from '../../speciality/outdoor.png'
import cate3 from '../../speciality/transparent-medical-icon-ultrasound-icon-6005ce2a246670-2654628616109931941491.jpg'
import cate4 from '../../speciality/download (1).png'
import Header from '../Home/Header/Header';
const Catagory = () => {
    return (
        <div className="container">

            <h1>our speaciality</h1>
            <h4>The best way to find yourself is to lose yourself in the service of others.</h4>
            <div className="speacial-container pb-4">
                <div className="row">
                    <div className="col-md-3">
                        <img src={cate1} alt="" />
                        <h2>ENDOSCOPY & COLONOSCOPY</h2>
                        <p>Endoscopy and colonoscopy examination which is performed by a light flexible tube attached to the camera without operation. Through which your doctor can see pictures of the interior (digestive tract, large intestine and rectum) on a color TV monitor.</p>
                    </div>
                    <div className="col-md-3">
                        <img src={cate2} alt="" />
                        <h2>OUTDOOR SERVICE</h2>
                        <p>We have 5 state-of-the-art operating theaters where regular surgeries of the following departments are performed.</p>
                    </div>
                    <div className="col-md-3">
                        <img src={cate3} alt="" />
                        <h2>ULTRASONOGRAPHY</h2>
                        <p>Ultrasonography machines of world famous brand state-of-the-art technology, each machine is rich in 4D technology.</p>
                    </div>
                    <div className="col-md-3">
                        <img src={cate4} alt="" />
                        <h2>MRI</h2>
                        <p>MRI or Magnetic Resonance Imaging is the most modern diagnostic test that uses a very clear image of the internal organs of the human body to detect a specific disease or abnormal condition.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Catagory;