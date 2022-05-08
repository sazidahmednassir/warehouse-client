import React from 'react';
import './Email.css';

const Email = () => {
    return (
        <div >
             <div className="h-50 " 
            class="container panda-bg-info d-flex justify-content-center align-items-center rounded-3 ">
            <div >
                <h1>LET'S STAY IN TOUCH</h1>
                <p>Contact us through Email </p>
               
                
                <a href="mailto:nassirctg1234@gmail.com" class="btn btn-dark mb-5">Send email</a>
            </div>
        </div>
        </div>
    );
};

export default Email;
