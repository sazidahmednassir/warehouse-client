import React from 'react';

const ManageInventoryDetails = ({mobile, handleReload}) => {

    const handleDelete = (id) => {
        console.log(id);
      
        fetch(`http://localhost:5000/mobile/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert(' Delete successfully!!!')
            handleReload();
          });
      };


    return (
    
        <>
                
 
  <tbody>
    <tr>
      
      <td><img
        src={mobile.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      /></td>
      <td>{mobile.name}</td>
      <td>{mobile.des}</td>
      <td>${mobile.price}</td>
      <td>{mobile.supplierName}</td>
      <td>{mobile.quantity}</td>
      <td><button type="button" onClick={ () => handleDelete(mobile._id)} class="btn btn-danger">Danger</button></td>
    </tr>

   
  </tbody>

        </>
        
    );
};

export default ManageInventoryDetails;