import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { auth } from '../../firebase.init';
import Myitem from '../Myitem/Myitem';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [items, setItemList]=useState([])
    const [Reload, setReload] = useState(false);
    

    useEffect(() => {
        const url = `http://localhost:5000/myitem`;
        fetch(url, {
          headers: {
            'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(res => res.json())
        .then(data => {setItemList(data)
        console.log(data)})
      },[user?.email, Reload])

      const handleReload = ()=>{
        setReload(!Reload)
      }

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
      if(!user){
        navigate(from);
      }
     
    return (
        <div className="container-fluid mt-5">

<div className="table-responsive">      
 <table class="table table-bordered table-hover">
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
      {items.map((item) => (
                <Myitem
                  item={item}    handleReload={handleReload}
                />
              ))}
    
    </table></div>
           
  
        </div>
    );
};

export default Myitems;