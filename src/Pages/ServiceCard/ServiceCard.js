import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service, handleReload}) => {

//   const navigateToServiceCardsDetails = service=>{
//     navigate(`/servic`);
// }
    return (
        <div>
            <div className="card" classNameName="cus">
  <img src={service.image} className="card-img-top" alt="Chicago Skyscrapers"/>
  <div className="card-body">
    <h5 className="card-title">{service.name}</h5>
    <p className="card-text">{service.des}</p>
  </div>
  <ul className="list-group  list-group-flush list-group-light list-group-small border-0">
    <li className="list-group-item px-4 border-0 fw-bold">Price: ${service.price}</li>
    <li className="list-group-item px-4 border-0 text-success fw-bold">Supplier Name: {service.supplierName}</li>
    <li className="list-group-item px-4 border-0 text-danger">Quantity: {service.quantity}</li>
  </ul>
  <div className="card-body ">
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
    <Link   to={`/mobile/${service._id}`}  >
<button type="button"   class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark"  >Manage</button></Link>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;