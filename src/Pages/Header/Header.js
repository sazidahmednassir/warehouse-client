import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container ">
                <Link className="navbar-brand" to="/">
                SmartPhone Inventory
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" 
                            to="/manageitems">Manage Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" 
                            to="/additem">Add Item</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" 
                            to="/myitem">My items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" 
                           to="/login" >Login</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        </div>
    );
};

export default Header;