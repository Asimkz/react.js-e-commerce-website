import React from 'react';
import '../Categories/Categories.css';
import rectangle from '../../images/Rectangle 18.png'
import iconsarrowleft from '../../images/icons_arrow-left.png'
import iconsarrowright from '../../images/icons arrow-right.png'
import Items from '../Categories-item/CategoriesItems.jsx';
import PhoneImg from '../../images/Category-CellPhone.png'
import ComputerImg from '../../images/Category-Computer.png'
import SwImg from '../../images/Category-SmartWatch.png'
import CameraImg from '../../images/Category-Camera.png'
import HpImg from '../../images/Category-Headphone.png'
import GamingImg from '../../images/Category-Gamepad.png'
const Categories = (props) => {
    return (

        <>
 <div className="container mt-5">
    <div className="row col-rapo">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="flashsale-today-heading-rapo ">
        <div className="today-heading d-flex align-items-center ">
                <img className='img-fluid' src={rectangle} alt="" />
                <h5>Categories</h5>
              </div>
              <div className="flashsale-heading">
                <h2>Browse By Category</h2>
              </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex justify-content-lg-end d-sm-flex justify-content-sm-center">
            <div className="arrow-icons-btns d-flex justify-content-end mt-auto">
            <a href="/" ><img className='img-fluid arrow' src={iconsarrowleft} alt="" /></a>
            <a href="/" ><img className='img-fluid arrow' src={iconsarrowright} alt="" /></a>
            </div>
          </div>
    </div>
    <div className="row items-row">
        <div className="col-lg-2 col-md-4  col-sm-6 mb-md-5 mb-sm-5">
            <Items itemimg={PhoneImg} css='item' itemname="Phones"/>

        </div>
        <div className="col-lg-2 col-md-4  col-sm-6">
            <Items itemimg={ComputerImg} css='item-two' itemname="Computers"/>

        </div>
        <div className="col-lg-2 col-md-4  col-sm-6 mb-md-5 mb-sm-5">
            <Items itemimg={SwImg} css='item-three' itemname="SmartWatch"/>

        </div>
        <div className="col-lg-2 col-md-4  col-sm-6">
            <Items itemimg={CameraImg} css='item-four' itemname="Camera"/>

        </div>
        <div className="col-lg-2 col-md-4  col-sm-6">
            <Items itemimg={HpImg} css='item-five' itemname="HeadPhones"/>

        </div>
        <div className="col-lg-2 col-md-4  col-sm-6">
            <Items itemimg={GamingImg} css='item-six' itemname="Gaming"/>

        </div>
    </div>
 </div>
        </>
    );
};

export default Categories;