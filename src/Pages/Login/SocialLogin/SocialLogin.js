import React from 'react';
import github from '../../../Images/social/github.png';
import google from '../../../Images/social/google.png';
const SocialLogin = () => {
    return (
        <div>
        <div className='d-flex align-items-center'>
       <div style={{ height: '1px' }} className='bg-primary w-50'></div>
       <p className='mt-2 px-2'>or</p>
       <div style={{ height: '1px' }} className='bg-primary w-50'></div>
   </div>
   
   <div className=''>
       <button
                    
           className='btn btn-light w-50 d-block mx-auto my-2'>
           <img style={{ width: '30px' }} src={google} alt="" />
           <span className='px-2'>Google Sign In</span>
       </button>
       
       <button
           
           className='btn btn-light w-50 d-block mx-auto mb-5'>
           <img style={{ width: '30px' }} src={github} alt="" />
           <span className='px-2'>Github Sign In</span>
       </button>
   </div>
</div>
    );
};

export default SocialLogin;