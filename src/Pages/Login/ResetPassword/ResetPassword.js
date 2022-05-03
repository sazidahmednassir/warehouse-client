import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const ResetPassword = () => {

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth );
    const emailRef= useRef(' ');

    const resetPassword= async (e)=>{
        e.preventDefault();
        const email= emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }

    return (
        <div>
            <div className='container w-50 mx-auto '>
        <form onSubmit={resetPassword} >
        <h2>Reset Password</h2>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
       
       
     </div>
    
    
     <button type="submit" class="btn btn-primary">Reset</button>
   </form>
   
   <div className='pt-2'>
  
   
     
   </div>
   
  
           </div>
        </div>
    );
};

export default ResetPassword;