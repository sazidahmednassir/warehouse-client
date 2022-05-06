import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceCardsDetails.css';


const ServiceCardsDetails = () => {
    const {mobileid} = useParams();
    // const [mobile] = MobileDetails(mobileid);
    const [mobile, setMobile] = useState({});
    const [control, setControl]=useState(false);
    useEffect( () =>{
        const url = `http://localhost:5000/mobile/${mobileid}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setMobile(data));

    }, [control]);
    
    const handledrement=()=>{
        const quantity= Number(mobile.quantity) - 1;
        fetch(`http://localhost:5000/mobile/${mobileid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  })
    .then((res) => res.json())
    .then((data) =>  { 
        console.log('success', data);   
    alert(' Delivered successfully!!!');
    setControl(!control)
     });
    }

    const handleIncrement=(event)=>{
        event.preventDefault();
        const quantity= Number(mobile.quantity) + Number(event.target.quantity.value);
        fetch(`http://localhost:5000/mobile/${mobileid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  })
    .then((res) => res.json())
    .then((data) =>  { 
        console.log('success', data);   
    alert(' Quantity Added successfully!!!');
    setControl(!control)
    event.target.reset();
     });

    }
    return (
        <div  className="d-flex flex-wrap justify-content-around my-4 mx-auto">
           <div className="card mb-3 w-50  " classNameName="cus">
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src={mobile.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{mobile.name}</h5>
        <p className="card-text">
      {mobile.des}
        </p>
        <p className="card-text fw-bold">Price:  {mobile.price}
        </p>
        <p className="card-text text-success fw-bold">Supplier Name:   {mobile.supplierName}
        </p>
        <p className="card-text text-danger">Quantity:  {mobile.quantity}
        </p>
        <button type="button"  onClick={handledrement} class="btn btn-outline-danger btn-rounded mb-3" data-mdb-ripple-color="dark"  >Delivered</button>
        <form onSubmit={handleIncrement}>
  <div class="form-group mb-3">
    <label for="addquantity " className="mb-3">Add Quantity</label>
    <input type="number"     name="quantity" class="form-control" id="addquantity"aria-describedby="emailHelp" placeholder="Add Quantity"/>
    
  </div>

 
  <button type="submit" class="btn btn-success">Add Quantity</button>
</form>
      </div>
    </div>
  </div>
</div>
 
</div>
            
        
    );
};

export default ServiceCardsDetails;