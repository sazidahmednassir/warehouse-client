import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Servicecards.css';

const Servicecards = ( ) => {
    const [services, setServices] = useState([]);
    const [Reload, setReload] = useState(false);
   
  
    

  useEffect(() => {
    fetch(`http://localhost:5000/mobile?limit=6`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [Reload]);

  const handleReload= ()=>{
    setReload(!Reload)
  }
    return (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
          {services.map((service) => (
          <ServiceCard
            service={service}   handleReload ={handleReload }   
          />
        ))}
        </div>
        </div>
    );
};

export default Servicecards;