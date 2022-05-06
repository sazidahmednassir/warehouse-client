import React from 'react';

const AddItem = () => {
    return (
        <div className='container w-50 mx-auto my-3'>
        <form >
        <h2>Add New Item</h2>
     <div class="mb-3">
       <label for="name" class="form-label">Enter Product Name</label>
       <input  type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" />
       
       
     </div>
     <div class="mb-3">
     <label for="des">Enter Product Description</label>
    <textarea class="form-control" name="des" id="des" rows="3"></textarea>
       
       
     </div>
     <div class="mb-3">
       <label for="price" class="form-label">Enter Product Price</label>
       <input  type="text" name="price" class="form-control" id="price" />
       
     </div>
     <div class="mb-3">
       <label for="supplierName" class="form-label">Enter Supplier Name</label>
       <input  type="text" name="supplierName" class="form-control" id="supplierName" />
       
     </div>
     <div class="mb-3">
       <label for="image" class="form-label">Enter Product Images Url</label>
       <input  type="text" name="supplierName" class="form-control" id="image" />
       
     </div>
     <div class="mb-3">
       <label for="quantity" class="form-label">Enter Product Quantity</label>
       <input  type="text" name="quantity" class="form-control" id="quantity" />
       
     </div>
    
     <button type="submit" class="btn btn btn-danger">Add New Item</button>
   </form>
        </div>
    );
};

export default AddItem;