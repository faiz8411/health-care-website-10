import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/fake-api-2/main/service.json')
            .then(res => res.json())
            .then(data => {
                setActivities(data)
            })
    }, [])
    return (
        <div>
            <h2>our services</h2>
            <div className="service-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>

        </div>
    );
};

export default Activities;