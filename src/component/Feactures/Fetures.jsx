import React from 'react';
import '../Feactures/Fetures.css';
import ps4 from '../../images/ps5-slim-goedkope-playstation_large 1.png'
import ladiesimg from '../../images/attractive-woman-wearing-hat-posing-black-background 1.png'
import threedag from '../../images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import perfume from '../../images/652e82cd70aa6522dd785109a455904c.png'
// import bgshadow from '../../images/Ellipse 24.png'
const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12  d-lg-flex d-md-flex justify-content-md-center mb-lg-0 mb-md-5 mb-sm-5 ">
            <div className="feature-first-img">
              <img className="img-fluid feature-img" src={ps4} alt="" />
              <div className="text-overlay">
                <h3>PlayStation 5</h3>
                <p>
                  Black and White version of the PS5 <br />
                  coming out on sale.
                </p>
                  <p style={{cursor:'pointer'}}>Shop Now</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12  d-lg-grid d-md-flex justify-content-md-center mb-lg-0 mb-md-5 mb-sm-5">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 feature-six-col-styling d-lg-start justify-content-lg-start d-md-flex justify-content-md-center mb-lg-0 mb-md-5 mb-sm-5 feature-six-col-styling">
                <div className="feature-Second-img">
                  <img
                    className="img-fluid feature-img"
                    src={ladiesimg}
                    alt=""
                  />

                  <div className="text-overlay">
                    <h3>Women’s Collections</h3>
                    <p>
                      Featured woman collections that
                      <br /> give you another vibe.
                    </p>
                    <a href="#">
                      <p>Shop Now</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row small-cards-row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-lg-flex d-md-flex justify-content-md-center mb-lg-0 mb-md-5 mb-sm-5 ">
                <div className="feature-third-img">
                  <img
                    className="img-fluid feature-img"
                    src={threedag}
                    alt=""
                  />
                  <div className="shadow-div"></div>
                  <div className="text-overlay">
                    <h3>Speakers</h3>
                    <p>Amazon wireless speakers</p>
                    <a href="#">
                      <p>Shop Now</p>
                    </a>
                  </div>
                  <div className="bg-shadow"></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-lg-flex d-md-flex justify-content-md-center mb-lg-0 mb-md-5 mb-sm-5 ">
                <div className="feature-third-img">
                  <img className="img-fluid feature-img" src={perfume} alt="" />
                  <div className="shadow-div"></div>
                  <div className="text-overlay">
                    <h3>Perfume</h3>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <a href="#">
                      <p>Shop Now</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

            export default Features;