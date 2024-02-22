import React from 'react';
import '../DiliveryService/DiliveryService.css';
import Diliveryimg from '../../images/Services.png'
import Diliveryimgtwo from '../../images/Services (1).png'
import Diliveryimgthree from '../../images/Services (2).png'
const DiliveryService = (props) => {
    return (

        <>
            <div className="container Dilivery-info-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="icon-heading-txt-main-rapo">
                            <div className="Dilivery-img d-flex justify-content-center align-items-center">
                                <img className='img-fluid' src={Diliveryimg} alt="" />
                            </div>
                            <div className="dilivery-heading-txt-rapo">
                                <div className="dilivery-heading-rapo d-flex justify-content-center align-items-center">
                                    <h5>FREE AND FAST DELIVERY</h5>
                                </div>
                                <div className="dilivery-txt-rapo">
                                    <p>Friendly 24/7 customer support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="icon-heading-txt-main-rapo">
                            <div className="Dilivery-img d-flex justify-content-center align-items-center">
                                <img className='img-fluid' src={Diliveryimgtwo} alt="" />
                            </div>
                            <div className="dilivery-heading-txt-rapo">
                                <div className="dilivery-heading-rapo d-flex justify-content-center align-items-center">
                                    <h5>24/7 CUSTOMER SERVICE</h5>
                                </div>
                                <div className="dilivery-txt-rapo">
                                    <p>Friendly 24/7 customer support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="icon-heading-txt-main-rapo">
                            <div className="Dilivery-img d-flex justify-content-center align-items-center">
                                <img className='img-fluid' src={Diliveryimgthree} alt="" />
                            </div>
                            <div className="dilivery-heading-txt-rapo">
                                <div className="dilivery-heading-rapo d-flex justify-content-center align-items-center">
                                    <h5>MONEY BACK GUARANTEE</h5>
                                </div>
                                <div className="dilivery-txt-rapo">
                                    <p>We reurn money within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiliveryService;