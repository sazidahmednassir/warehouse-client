import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase.init';
import google from '../../../Images/social/google.png';
import './Register.css';

const Register = () => {
  const [agree, setAgree]=useState(false)
  // if(agree){
  //   createUserWithEmailAndPassword(email, password)
  //   navigate('/');
  // }

 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

   

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

        // setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum eight characters, at least one letter, one number and one special character!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
      if (e.target.value === userInfo.password) {
          setUserInfo({ ...userInfo, confirmPass: e.target.value });
          setErrors({ ...errors, password: "" });
      } else {
          setErrors({ ...errors, password: "Password's don't match" });
          setUserInfo({ ...userInfo, confirmPass: "" });
      }
  };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        
    };

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError, googleError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from);
        }
    }, [user]);


    if (user ) {
        //  console.log()
        //  console.log(googleUser?.user?.email)
        const email=user?.user?.email
        const url = 'https://thawing-mountain-31554.herokuapp.com/register';
      
      
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
                localStorage.setItem("accessToken", data.token);
                // navigate(from, { replace: true });
                navigate(from);
            });
      
       }
      
       if (googleUser ) {
        //  console.log(user?.user?.email)
        //  console.log(googleUser?.user?.email)
        const url = 'https://thawing-mountain-31554.herokuapp.com/register';
      
      
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
                localStorage.setItem("accessToken", data.token);
                // navigate(from, { replace: true });
                navigate(from);
            });
      
       }
 
    return (
        <div className="container w-50 mx-auto">
        <div className='mb-2 '>
              <form  onSubmit={handleRegister}>
              <h2>Please Register</h2>
         
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
      {errors?.email && <p className="text-danger">{errors.email}</p>}
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input  type="password" class="form-control" id="exampleInputPassword1" onChange={handlePasswordChange}/>
      {errors?.password && <p className="text-danger">{errors.password}</p>}
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
      <input  type="password" class="form-control" id="exampleInputPassword2"  onChange={handleConfirmPasswordChange}/>
    </div>
    
    <div class="mb-3 form-check text-danger">
      <input  onClick={()=> setAgree(!agree)} type="checkbox" class="form-check-input" id="terms"/>
      <label  className={  agree?  'text-primary': 'text-danger'}   class="form-check-label" for="terms">Accept Terms and Conditions</label>
    </div>
    <button  disabled={!agree}
     type="submit" class="btn btn-primary">Register</button>
  </form>
  </div>
  <ToastContainer />
  <p >Already have an account? <Link  to="/login" className='text-primary text-decoration-none' >Please Login</Link> </p>
 

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
export default Register;