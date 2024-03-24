import {React ,useState,useEffect} from 'react';
import './Product.css';
import Card from '../ProductCard/ProductCard.jsx';
import rectangle from '../../images/Rectangle 18.png'
import iconsarrowleft from '../../images/icons_arrow-left.png'
import iconsarrowright from '../../images/icons arrow-right.png'
import dogfoodimg from '../../images/71RdoeXxtrL 1.png'
import icon1 from '../../images/Vector.png'
import icon2 from '../../images/Vector-y.png'
import cannoncamera from '../../images/eos-250d-03-500x500 1.png'
import laptop from '../../images/ideapad-gaming-3i-01-500x500 1.png'
import facecream from '../../images/curology-j7pKVQrTUsM-unsplash 1.png'
import childrencar from '../../images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png'
import toshows from '../../images/Copa_Sense 1.png'
import gameplaytoy from '../../images/GP11_PRD3 1 (1).png'
import jakit from '../../images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'
import Switches from '../Switches/Switches.jsx';
import Button from '../Button/Button.jsx';
const Product = ({ SighnUpData }) => {
    const [Sighnupdatapass, setSighnUpDataPass] = useState(SighnUpData);
  
    // Function to update Sighnupdatapass
    // const updateSighnUpData = (newData) => {
    //   setSighnUpDataPass(newData);
    // };
  
    // useEffect to update the state when SighnUpData prop changes
    useEffect(() => {
      setSighnUpDataPass(SighnUpData);
    }, [SighnUpData]);
    
      
    return (
      <>
        <div className="container Product-section">
          <div className="row col-rapo">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="flashsale-today-heading-rapo ">
                <div className="today-heading d-flex align-items-center  ">
                  <img className="img-fluid" src={rectangle} alt="" />
                  <h5>Our Products</h5>
                </div>
                <div className="flashsale-heading">
                  <h2>Explore Our Products</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex justify-content-lg-end d-sm-flex justify-content-sm-center">
              <div className="arrow-icons-btns d-flex justify-content-end mt-auto">
                <a href="/">
                  <img
                    className="img-fluid arrow"
                    src={iconsarrowleft}
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    className="img-fluid arrow"
                    src={iconsarrowright}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row cards-row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                SighnUpDataPass={Sighnupdatapass}
                chcss="ch-css"
                picss="pi-css"
                CardImg={dogfoodimg}
                CardHeading="Breed Dry Dog Food"
                CardPrice="$100"
                RatingNum="(65)"
                iconone={icon1}
                icontwo={icon1}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                CardImg={cannoncamera}
                CardHeading="CANON EOS DSLR Camera"
                CardPrice="$360"
                RatingNum="(95) "
                iconone={icon2}
                icontwo={icon1}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                CardImg={laptop}
                CardHeading="ASUS FHD Gaming Laptop"
                CardPrice="$700"
                RatingNum="(325)"
                iconone={icon2}
                icontwo={icon2}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                CardImg={facecream}
                CardHeading="Curology Product Set "
                CardPrice="$500"
                RatingNum="(145)"
                iconone={icon2}
                icontwo={icon1}
              />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row cards-row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                tagcss="tag-specific-two-css"
                CardImg={childrencar}
                CardHeading="Kids Electric Car"
                CardPrice="$960"
                RatingNum="(65)"
                tagpercent="New"
                iconone={icon2}
                icontwo={icon2}
              ></Card>
              <Switches />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                CardImg={toshows}
                CardHeading="Jr. Zoom Soccer Cleats"
                CardPrice="$1160"
                RatingNum="(35) "
                iconone={icon2}
                icontwo={icon2}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                tagcss="tag-specific-two-css"
                CardImg={gameplaytoy}
                CardHeading="GP11 Shooter USB Gamepad"
                CardPrice="$660"
                RatingNum="(55)"
                tagpercent="New"
                iconone={icon2}
                icontwo={icon1}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
              <Card
                chcss="ch-css"
                picss="pi-css"
                CardImg={jakit}
                CardHeading="Quilted Satin Jacket "
                CardPrice="$660"
                RatingNum="(55)"
                iconone={icon2}
                icontwo={icon1}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Button-rap d-flex justify-content-center">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Product;