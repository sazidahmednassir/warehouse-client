import React from 'react';


const Blog = () => {
    return (
        <div className="w-50 mx-auto my-3 ">
       <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">Difference between javascript and nodejs?</h5>
    <p class="card-text">Node.js is a runtime environment and library for running JavaScript on the server. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js applications are written in JavaScript, and can be run on Mac OS X, Windows, and Linux.
Javascript is a programming language that runs in web browsers. It is used to create interactive websites and web applications.</p>
    
  </div>
</div>
       <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">When should you use nodejs and when should you use mongodb?</h5>
    <p class="card-text">Nodejs is a javascript runtime built on Chrome's V8 engine. It is used for developing fast and scalable network applications. MongoDB is a document-oriented database system. It is used for storing and managing large scale data sets.
   Nodejs should be used when developing fast and scalable network applications. MongoDB should be used when storing and managing large scale data sets.</p>
    
  </div>
</div>
       <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">What is the purpose of jwt and how does it work?</h5>
    <p class="card-text">JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using a JSON Web Signature (JWS).
    The JWT specification defines a standard token format that can be used by any application that needs to securely transmit information between parties.</p>
    
  </div>
</div>
            
        </div>
    );
};

export default Blog;