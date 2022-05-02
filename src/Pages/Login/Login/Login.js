import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='container w-50 mx-auto '>
        <form className='cus'  >
        <h2>Please Login</h2>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input  type="password" class="form-control" id="exampleInputPassword1"/>
     </div>
    
     <button type="submit" class="btn btn-primary">Login</button>
   </form>
   
   <div className='pt-2'>
     <p>New to SmartPhone Inventory? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
     <p>Forget Password? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Reset Password</Link> </p>
   </div>
   
   <SocialLogin></SocialLogin>  
                 
           </div>
    );
};

export default Login;