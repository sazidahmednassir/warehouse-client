import React from 'react';
import './Myitem.css';

const Myitem = ({item, handleReload}) => {



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
        src={item.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      /></td>
      <td>{item.name}</td>
      <td>{item.des}</td>
      <td>${item.price}</td>
      <td>{item.supplierName}</td>
      <td>{item.quantity}</td>
      <td><button type="button"  onClick={ () => handleDelete(item._id)} class="btn btn-danger">Delete</button></td>
    </tr>

   
  </tbody>  
        </>
    );
};

export default Myitem;