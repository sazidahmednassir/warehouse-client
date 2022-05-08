import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Servicecards.css';

const Servicecards = ( ) => {
    const [mobiles, setMobile] = useState([]);
    const [Reload, setReload] = useState(false);
   
  
    

  useEffect(() => {
    fetch(`http://localhost:5000/mobile?limit=6`)
      .then((res) => res.json())
      .then((data) => {setMobile(data)
      setReload(!Reload)});
  }, [mobiles, Reload]);

  const navigate = useNavigate();
  const location = useLocation();
 const from = location.state?.from?.pathname || "/manageinventory";
const navigateMangeInventory=()=>{
  navigate(from)
}


    return (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-2 ">
          {mobiles.map((mobile) => (
          <ServiceCard
            mobile={mobile}    
          />
        ))}
        </div>
        <div><button onClick={()=>navigateMangeInventory()} type="button" class="btn btn-dark btn-rounded my-5">Manage Inventories</button></div>
        </div>
    );
};

export default Servicecards;