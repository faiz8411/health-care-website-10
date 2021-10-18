import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faClock, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import clock from '../../schedule/209-2095776_transparent-time-clock-png-time-vector-icon-png.png'
import teliphnoe from '../../schedule/download.png'
import location from '../../schedule/download (1).png'

import './Schedule.css'

import { render } from 'react-dom';

const Schedule = () => {
    const element = <FontAwesomeIcon icon={faPeopleArrows} />
    return (
        <div className="shcedule-container m-5">
            <h2 className="text-white">Our schedule time : {element}</h2>
            <div className="ccart">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="clock">
                            <img src={clock} alt="" />
                        </div>
                        <div>
                            <h4 className="text-white">OPENING HOURS</h4>
                            <h5 className="text-white mx-4">Outdoor - 08.00am - 10.00pm <br />
                                Emergency 24/7 Days Open</h5>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="clock">
                            <img src={teliphnoe} alt="" />
                        </div>
                        <div>
                            <h4 className="text-white">EMERGENCY CALL US</h4>
                            <h5 className="text-white mx-4">01716566923, 01712025995 <br />
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="clock">
                            <img src={location} alt="" />
                        </div>
                        <div>
                            <h4 className="text-white">OUR LOCATION</h4>
                            <h5 className="text-white m-2">General Hospital Road,<br />  Maijdee court, Noakhali-3800. <br />
                            </h5>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Schedule;