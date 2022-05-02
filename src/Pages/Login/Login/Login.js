import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase.init';
import google from '../../../Images/social/google.png';
import './Login.css';

const Login = () => {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
})
const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
})

  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);


  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    
    if(validEmail){
        setUserInfo({...userInfo, email: e.target.value}) 
        setErrors({...errors, email: ""})      
    } else {
        setErrors({...errors, email: "Invalid email"})
        setUserInfo({...userInfo, email: ""})
    }
  }

  const handlePasswordChange = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegex.test(e.target.value);
    // console.log(validPassword)
    
    if(validPassword){
        setUserInfo({...userInfo, password: e.target.value});
        setErrors({...errors, password: ""});
    } else {
        setErrors({...errors, password: "Minimum eight characters, at least one letter, one number and one special character!"});
        setUserInfo({...userInfo, password: ""})
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // console.log(userInfo)

    signInWithEmail(userInfo.email, userInfo.password);
    
}

const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

 useEffect(() => {
   
  if (user) {
      navigate(from);
  }
}, [user]);


useEffect(() => {
  const error = hookError || googleError;
  if(error){
      switch(error?.code){
          case "auth/invalid-email":
              toast("Invalid email provided, please provide a valid email");
              break;
          
          case "auth/invalid-password":
              toast("Wrong password. Intruder!!")
              break;
              case "auth/user-not-found" :
                toast("user don't register")
                break;
          default:
              toast("something went wrong")
      }
  }
}, [hookError, googleError])

// const resetPassword= async (e)=>{
//   const email= e.target.email.value;
//   console.log(email)
//   await sendPasswordResetEmail(email);
//   toast('Sent email');
// }

    return (
        <div className='container w-50 mx-auto '>
        <form onSubmit={handleLogin}>
        <h2>Please Login</h2>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
       
       
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input  type="password" class="form-control" id="exampleInputPassword1" onChange={handlePasswordChange}/>
       
     </div>
    
     <button type="submit" class="btn btn-primary">Login</button>
   </form>
   
   <div className='pt-2'>
   <ToastContainer />
   
     <p>New to SmartPhone Inventory? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
     <p>Forget Password? <Link to="/login" className='text-primary pe-auto text-decoration-none'  >Reset Password</Link> </p>
   </div>
   
   <div className=''>
       <button
                    
           className='btn btn-light w-50 d-block mx-auto my-2' onClick={() => signInWithGoogle()}>
           <img style={{ width: '30px' }} src={google} alt="" />
           <span className='px-2'>Google Sign In</span>
       </button>

                 
           </div>
           </div>
    );
};

export default Login;