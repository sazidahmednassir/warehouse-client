import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase.init';
import google from '../../../Images/social/google.png';
import './Login.css';

const Login = () => {



  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);


  

const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";


// console.log(user.email);
// console.log(googleUser.email)
 useEffect(() => {
   
  if (user || googleUser) {
    
navigate(from);
      
  }
}, [user, googleUser]);


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



const emailRef= useRef(' ');
 const passwordRef=useRef(' ');

 const handleLogin=(event)=>{
  event.preventDefault();
  const email= emailRef.current.value;
  const password=passwordRef.current.value;
  signInWithEmail(email, password)
  console.log(user);
  console.log(email,password);
 }

 if (user ) {
  //  console.log()
  //  console.log(googleUser?.user?.email)
  const email=user?.user?.email
  const url = 'http://localhost:5000/login';


  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          email: email
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
          // localStorage.setItem("accessToken", data.token);
          // navigate(from, { replace: true });
      });

 }

 if (googleUser ) {
  //  console.log(user?.user?.email)
  //  console.log(googleUser?.user?.email)
  const url = 'http://localhost:5000/login';


  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          email: googleUser?.user?.email
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
          // localStorage.setItem("accessToken", data.token);
          // navigate(from, { replace: true });
      });

 }

    return (
        <div className='container w-50 mx-auto '>
        <form onSubmit={handleLogin}>
        <h2>Please Login</h2>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
       
       
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input  type="password" class="form-control" id="exampleInputPassword1" ref={passwordRef}/>
       
     </div>
    
     <button type="submit" class="btn btn-primary">Login</button>
   </form>
   
   <div className='pt-2'>
   <ToastContainer />
   
     <p>New to SmartPhone Inventory? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
     <p>Forget Password? <Link to="/resetpassword" className='text-primary pe-auto text-decoration-none'  >Reset Password</Link> </p>
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