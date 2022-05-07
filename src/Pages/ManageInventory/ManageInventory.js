import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [mobiles, setMobile] = useState([]);
    const [Reload, setReload] = useState(false);
   
    const handleReload = ()=>{
        setReload(!Reload)
      }
    

  useEffect(() => {
    fetch("http://localhost:5000/mobile")
      .then((res) => res.json())
      .then((data) => {setMobile(data)
      setReload(!Reload)});
  }, [Reload]);

  const navigate = useNavigate();
  const location = useLocation();
 const from = location.state?.from?.pathname || "/additem";


  const navigateAddnewitem=()=>{
    navigate(from)
  }
    return (
        <div className="my-3">
         <table class="table">
  <thead>
     
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Des</th>
      <th scope="col">Price</th>
      <th scope="col">SupplierName</th>
      <th scope="col">Quantity</th>
      <th scope="col">Action</th>
      </tr>
      </thead>
      {mobiles.map((mobile) => (
                <ManageInventoryDetails
                  mobile={mobile}    handleReload={handleReload}
                />
              ))}
    
    </table>
    <div><button onClick={()=>navigateAddnewitem()} type="button" class="btn btn-dark btn-rounded my-3">Add New Item</button></div>
          
       
        </div>
    );
};

export default ManageInventory;