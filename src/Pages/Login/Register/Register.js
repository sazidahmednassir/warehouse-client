import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
  const [agree, setAgree]=useState(false)
  // if(agree){
  //   createUserWithEmailAndPassword(email, password)
  //   navigate('/');
  // }
 
    return (
        <div className="container w-50 mx-auto">
        <div className='mb-2 '>
              <form  >
              <h2>Please Register</h2>
              <div class="mb-3">
      <label for="exampleInputName" class="form-label">Your Name</label>
      <input   type="namel" class="form-control" id="exampleInputName"/>
      
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input  type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <div class="mb-3 form-check text-danger">
      <input  onClick={()=> setAgree(!agree)} type="checkbox" class="form-check-input" id="terms"/>
      <label  className={  agree?  'text-primary': 'text-danger'}   class="form-check-label" for="terms">Accept Terms and Conditions</label>
    </div>
    <button  disabled={!agree}
     type="submit" class="btn btn-primary">Register</button>
  </form>
  </div>
  <p >Already have an account? <Link  to="/login" className='text-primary text-decoration-none' >Please Login</Link> </p>
 
  <SocialLogin></SocialLogin>  
          </div>
    );
};

export default Register;