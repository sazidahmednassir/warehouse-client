import React from 'react';

const ManageInventoryDetails = ({mobile, handleReload}) => {

    const handleDelete = (id) => {
        console.log(id);
      
        fetch(`https://thawing-mountain-31554.herokuapp.com/mobile/${id}`, {
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
      <td><button type="button" onClick={ () => handleDelete(mobile._id)} class="btn btn-danger">Delete</button></td>
    </tr>

   
  </tbody>

        </>
        
    );
};

export default ManageInventoryDetails;