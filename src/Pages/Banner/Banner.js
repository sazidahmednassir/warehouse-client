import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row cusrow">
                    <div className="col-sm-6 cushea">
                        <h2 className='cush' >Welome SmartPhone Inventory</h2>
                        <p className='text-white '>Our Smartphone inventory management system tracks stock levels and product movements between suppliers, warehouses. Easily manage your inventory and do time to time “stock-taking” operation. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;