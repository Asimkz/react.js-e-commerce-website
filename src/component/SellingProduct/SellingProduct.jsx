import React from 'react';
import './SellingProduct.css';
import rectangle from '../../images/Rectangle 18.png'
import ButtonTwo from '../ButtonTwo/ButtonTwo'
import Card from '../ProductCard/ProductCard.jsx';
import ClothCardImg from '../../images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import Ladiesbegimg from '../../images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
import DegImg from '../../images/gammaxx-l240-argb-1-500x500 1.png'
import WoodTable from '../../images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'
import iconone from '../../images/Vector-y.png'
import Icontwo from '../../images/Vector-y.png';
const SellingProduct = (props) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row col-rapo">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-md-5 mb-sm-5">
                        <div className="flashsale-today-heading-rapo ">
                            <div className="today-heading d-flex align-items-center  ">
                                <img className='img-fluid' src={rectangle} alt="" />
                                <h5>This Month</h5>
                            </div>
                            <div className="flashsale-heading">
                                <h2>Best Selling Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex justify-content-lg-end d-sm-flex justify-content-sm-center">
                        <div className="arrow-icons-btns d-flex justify-content-end mt-auto">
                            <ButtonTwo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row cards-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
                        <Card
                            CardImg={ClothCardImg}
                            CardHeading="The north coat"
                            CardPrice="$260"
                            CardSpanPrice="$360"
                            RatingNum="(65)"
                            iconone={iconone} icontwo={Icontwo}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
                        <Card
                            CardImg={Ladiesbegimg}
                            CardHeading="Gucci duffle bag"
                            CardPrice="$960"
                            CardSpanPrice="$1160"
                            RatingNum="(65)"
                            iconone={iconone} icontwo={Icontwo}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
                        <Card
                            CardImg={DegImg}
                            CardHeading="RGB liquid CPU Cooler"
                            CardPrice="$160"
                            CardSpanPrice="$170"
                            RatingNum="(65)"
                            iconone={iconone} icontwo={Icontwo}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
                        <Card
                            CardImg={WoodTable}
                            CardHeading="The north coat"
                            CardPrice="$360"
                            RatingNum="(65)"
                            tagcss='Tag-Specific-css'
                            iconone={iconone} icontwo={Icontwo}
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default SellingProduct;