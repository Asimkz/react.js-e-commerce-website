import React from 'react';
import './TopHeadline.css';


const Topheadline = () => {
    return (

        <nav className="topheadline">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="text-link-rapo d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center text-lg-center text-md-center">
                            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                <span>SHOP NOW</span>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className='selector-word-rapo d-lg-flex justify-content-lg-end d-md-grid justify-content-md-center d-sm-grid justify-content-sm-center'>
                            <select className="form-select form-select-lg " aria-label=".form-select-lg example">
                                <option selected>English</option>
                                <option value="1">One</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topheadline;