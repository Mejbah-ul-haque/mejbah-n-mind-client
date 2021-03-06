import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch('https://mejba-n-mind.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <h1 style={{ color: 'seagreen', fontSize:'50px', fontWeight:'bold', marginTop:'100px' }} className='text-center'>My Projects</h1>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;