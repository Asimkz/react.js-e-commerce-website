import React from 'react';
import '../Sales/SaleProduct.css';
import Card from '../ProductCard/ProductCard.jsx';
import rectangle from '../../images/Rectangle 18.png';
import dot from '../../images/Ellipse 17.png';
import iconsarrowleft from '../../images/icons_arrow-left.png';
import iconsarrowright from '../../images/icons arrow-right.png';
import Button from '../Button/Button.jsx';
import Cards from '../CardList/CardList.jsx';

const SaleProduct = (props) => {
  const Cardone = ({data1}) => {
    return (
      <Card
        key={data1.CardId}
        CardId={data1.CardId}
        CardImg={data1.CardImg}
        CardHeading={data1.CardHeading}
        CardPrice={data1.CardPrice}
        CardSpanPrice={data1.CardSpanPrice}
        RatingNum={data1.RatingNum}
        tagpercent={data1.tagpercent}
        tagcss={data1.tagcss}
        iconone={data1.iconone}
        icontwo={data1.icontwo}
      />
    );
  }

  return (

    <>
      <div className="container saleproduct-container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 ">
            <div className="flashsale-today-heading-rapo ">
              <div className="today-heading  d-lg-flex justify-lg-content-start d-md-flex justify-md-content-start  d-sm-flex justify-content-sm-center align-items-center">
                <img className='img-fluid' src={rectangle} alt="" />
                <h5>Today’s</h5>
              </div>
              <div className="flashsale-heading">
                <h2>Flash Sales</h2>
              </div>

            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12  d-lg-flex justify-content-lg-start d-flex justify-content-sm-center ">
            <div className="time-main-rapo d-flex">
              <div className="date-time-rapo d-grid">
                <p>Days</p>
                <h3>03</h3>
              </div>
              <div className="dot-img d-grid me-4">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
            </div>
            <div className="time-main-rapo d-flex  ">
              <div className="date-time-rapo d-grid">
                <p>Hours</p>
                <h3>23</h3>
              </div>
              <div className="dot-img d-grid me-4">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
            </div>
            <div className="time-main-rapo d-flex  ">
              <div className="date-time-rapo d-grid">
                <p>Minutes</p>
                <h3>19</h3>
              </div>
              <div className="dot-img d-grid me-4">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
            </div>
            <div className="time-main-rapo d-flex  ">
              <div className="date-time-rapo d-grid">
                <p>Seconds</p>
                <h3>56</h3>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-lg-flex justify-content-lg-end d-sm-flex justify-content-sm-center">
            <div className="arrow-icons-btns d-flex justify-content-end mt-auto">
              <a href="/" ><img className='img-fluid arrow' src={iconsarrowleft} alt="" /></a>
              <a href="/" ><img className='img-fluid arrow' src={iconsarrowright} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="row cards-row">

          {
            Cards.map((item, index) => {
              console.log("item", item)
              return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-sm-5">
                  <Cardone data1={item}/>
                </div>
              )
            }
            )
          }
          
          

        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="Button-rapo d-flex justify-content-center">
              <Button />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default SaleProduct;