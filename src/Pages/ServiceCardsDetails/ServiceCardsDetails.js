import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './ServiceCardsDetails.css';


const ServiceCardsDetails = ({setReload, Reload}) => {
    const {mobileid} = useParams();
    // const [mobile] = MobileDetails(mobileid);
    const [mobile, setMobile] = useState({});
    const [control, setControl]=useState(false);
    const [agree, setAgree]=useState(true)

    useEffect( () =>{
        const url = `https://thawing-mountain-31554.herokuapp.com/mobile/${mobileid}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setMobile(data));

    }, [control]);

    
    const handledrement=()=>{
        const quantity= Number(mobile.quantity) - 1;
     
      
     
        fetch(`https://thawing-mountain-31554.herokuapp.com/mobile/${mobileid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  })
    .then((res) => res.json())
    .then((data) =>  { 
        console.log('success', data);   
        toast(' Delivered successfully!!!');
    if(quantity==0){
      setControl(!control)
      setAgree(!agree)
      
      return toast(' Stock out & Add Stock');
    }
 setControl(!control) 
     });
    }

    // const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    // const [ googleUser] = useSignInWithGoogle(auth);
    

    


 

    const handleIncrement=(event)=>{
        event.preventDefault();
        
        const newQuantity= Number(mobile.quantity)
        const inputQuantity=Number(event.target.quantity.value);
        // console.log(inputQuantity.length)
        if (inputQuantity<=0 || inputQuantity.length=== "undefined"){
          event.target.reset();
          return toast('Dont add negative number & add positive number!!!')
        }
        const quantity= Number(mobile.quantity) + inputQuantity;
        fetch(`https://thawing-mountain-31554.herokuapp.com/mobile/${mobileid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  })
    .then((res) => res.json())
    .then((data) =>  { 
        console.log('success', data);   
    toast(' Quantity Added successfully!!!');
    if(newQuantity==0){
      setControl(!control)
      setAgree(!agree)
      
      event.target.reset();
    }
    
    setControl(!control)
    
    event.target.reset();
     });

    }

    // const navigate = useNavigate();
    // useEffect(() => {
   
    //   if ( googleUser) {
    //       navigate("/manageinventory");
    //   }
    // }, [googleUser]);

   

    return (
        <div  className=" my-4 mx-auto">
          <div className="d-flex flex-wrap justify-content-around">
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
        <p   className="card-text text-danger">Quantity:  {mobile.quantity}
        </p>
        <button type="button" disabled={!agree} onClick={handledrement}  class="btn btn-outline-danger btn-rounded mb-3" data-mdb-ripple-color="dark"  >Delivered</button>
        <form onSubmit={handleIncrement}>
  <div class="form-group mb-3">
    <label for="addquantity " className="mb-3">Add Quantity</label>
    <input type="number"     name="quantity" class="form-control" id="addquantity"aria-describedby="emailHelp" placeholder="Add Quantity"/>
    
  </div>

 
  <button type="submit"  class="btn btn-success">Add Quantity</button>
</form>
      </div>
    </div>
  </div>
</div>
          </div>
    
<div><Link to="/manageinventory"><button type="button"class="btn btn-dark btn-rounded my-3">Manage Inventories</button></Link></div>
<ToastContainer></ToastContainer>
 
</div>
            
        
    );
};

export default ServiceCardsDetails;