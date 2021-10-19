import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import doctor1 from '../../doctor/DR-CORRIE-T-M-ANDERSON (1).jpg'
import doctor2 from '../../doctor/Dr-William.jpg'
import doctor3 from '../../doctor/Dr-Myles-B-Abbot.jpg'
import doctor4 from '../../doctor/Dr-Khalid.jpg'
import doctor5 from '../../doctor/Dr-Naresh-Trehan.jpg'
import doctor6 from '../../doctor/Fouad-Abbas.jpg'


const Specialist = () => {

    return (
        <div className="splecilist-container">
            <h2>our  specialist team always work dor critical patient</h2>
            <CardGroup className="m-5 ">
                <Card>
                    <Card.Img variant="top" src={doctor1} />
                    <Card.Body>
                        <Card.Title>Dr. Corrie T.M Anderson</Card.Title>
                        <Card.Text>
                            In 2001, Dr. Anderson became the director of the program for Pediatric Pain Medicine in the Department of Anesthesiology at Seattle Children’s Hospital. He is also a professor of anesthesiology and associate professor of pediatrics at the University of Washington School of Medicine.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={doctor2} />
                    <Card.Body>
                        <Card.Title>Dr. William</Card.Title>
                        <Card.Text>
                            Dr. Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. He hones surgery of the Spine, including Cervical, Thoracic and Lumbar Disorders, Disk Herniation, Spinal Stenosis, Spondylolisthesis, Spondylotic Myelopathy, Spinal Cord Injury, and Spine Trauma. Also, he had discovered many new techniques for spine treatment.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={doctor3} />
                    <Card.Body>
                        <Card.Title>Dr. Myles. B. Abbott</Card.Title>
                        <Card.Text>
                            Dr. Myles currently practices at East Bay Pediatric & Medical Group and is affiliated with Alta Bates Summit Medical Center Alta Bates Campus and Children’s Hospital & Research Center Oakland.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={doctor4} />
                    <Card.Body>
                        <Card.Title>Dr. Khalid Abbed</Card.Title>
                        <Card.Text>
                            Dr. Khalid obtained his bachelor’s degree in Biological Sciences from the University of Illinois in Champaign-Urbana in 1993. He continued his education in the same University and received his Doctor of Medicine degree with Honors in 1999. Currently, he is working at Yale as a Director of the Spine Surgery Department. Many consider him the best doctor in the world.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={doctor5} />
                    <Card.Body>
                        <Card.Title>Dr. Naresh Trehan</Card.Title>
                        <Card.Text>
                            Dr. Naresh was also the founder, executive director, and chief cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), New Delhi, India. At present, he is serving as a Chairman and Managing Director and Chief Cardiac Surgeon of MedantaTM-The Medicity, one of the largest multi-specialty hospitals at Gurgaon, Haryana.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={doctor6} />
                    <Card.Body>
                        <Card.Title>Dr. Fouad. M. Abbas</Card.Title>
                        <Card.Text>
                            Dr. Abbas graduated from the University of Maryland School of Medicine in 1986. Currently, he is affiliated with Medstar Harbor Hospital and Sinai Hospital Of Baltimore.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Specialist;