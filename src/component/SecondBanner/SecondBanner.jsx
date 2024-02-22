import React from 'react';
import './SecondBanner.css';
import Bigdag from '../../images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import ButtonThree from '../ButtonThree/ButtonThree'
const SecondBanner = (props) => {
    return (

        <>
<div className="container Second-banner-container">
    <div className="row">
        <div className="col-lg-6">
            <div className="heading-txt-btn-rapo">
                <div className="txt">
                    <h6>Categories</h6>
                </div>
                <div className="second-banner-heading">
                    <h2>Enhance Your Music Experience</h2>
                </div>
                <div className="tags-txt-rapo  d-flex">
                    <div className="tag-txt">
                 <h6>23</h6>
                 <p>Hours</p>
                 </div>
                 <div className="tag-txt">
                 <h6>05</h6>
                 <p>Days</p>
                 </div>
                 <div className="tag-txt">
                 <h6>59</h6>
                 <p>Minutes</p>
                 </div>
                 <div className="tag-txt">
                 <h6>35</h6>
                 <p>Seconds</p>
                 </div>
                </div>
                <div className="arrow-icons-btns d-flex justify-content-start">
                            <ButtonThree />
                        </div>
            </div>
        </div>
        <div className="col-lg-6 ">
            <div className="Second-banner-img">
            <img className='img-fluid ' src={Bigdag} alt="" />
            <div className="shadow-div">
                
                </div>
            </div>
           
        </div>
        </div>
</div>

        </>
    );
};

export default SecondBanner;