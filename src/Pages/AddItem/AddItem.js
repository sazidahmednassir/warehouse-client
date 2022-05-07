import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const AddItem = () => {
  const [isReload, setIsReload] = useState(false);
  const [user]=useAuthState(auth);

  // console.log(user.email)

const handleItemCreated=((event)=>{

  event.preventDefault();
  const name=event.target.name.value;
  const des=event.target.des.value;
  const price=event.target.price.value;
  const supplierName=event.target.supplierName.value;
  const image=event.target.image.value;
  const quantity=event.target.quantity.value;
  const  email=event.target.email.value;

  fetch("http://localhost:5000/createmobile", {
    method: "POST",
    headers: {
      'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
      "Content-type": "application/json",
    },

    body: JSON.stringify({ name, des,  price,  supplierName, image, quantity, email}),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.success === "UnAuthoraized Access"){
        alert(' UnAuthoraized Access!!! ')
        event.target.reset();
      }else{
        console.log(data);
     
        alert(' Item Added Successfully!!!')
        setIsReload(!isReload);
        event.target.reset();
      }
    
    });


})


    return (
        <div className='container w-50 mx-auto my-3'>
        <form  onSubmit={handleItemCreated}>
        <h2>Add New Item</h2>
     <div class="mb-3">
       <label for="name" class="form-label">Enter Product Name</label>
       <input  type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" />
        </div>
     <div class="mb-3">
       <label for="email" class="form-label">Enter Your Email</label>
       <input  type="text" name="email"   class="form-control" id="email" aria-describedby="emailHelp"  />
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
       <input  type="text" name="image" class="form-control" id="image" />
       
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