import React from 'react';
import '../Footer/Footer.css';
import paperplan from '../../images/icon-send.png'
import scanimg from '../../images/Qr Code.png'
import playstore1 from '../../images/GooglePlay.png'
import playstore2 from '../../images/AppStore.png'
import IconFacebook from '../../images/Icon-Facebook.png'
import Icontwitter from '../../images/Group.png'
import Iconinsta from '../../images/icon-instagram.png'
import Iconlinkdin from '../../images/Icon-Linkedin.png'
import copyrighticon from '../../images/copy-right-icon.png'
const Footer = (props) => {
    return (

        <>
          <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="heading-subheading-txt-input-main-rapo">
                            <div className="footer-heading">
                                <h5>Exclusive</h5>
                            </div>
                            <div className="footer-subheading">
                           
                                <h6>Subscribe</h6>
                        
                            </div>
                            <div className="footer-txt">
                                <p>Get 10% off your first order</p>
                            </div>
                            <div className="footer-input-div">
                            <img className='img-fluid paper-plan' src={paperplan} alt="" />
                            <input type="text" class=" footer-input" placeholder="Enter your email" />
                          
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="heading-txt-main-rapo">
                            <div className="footer-heading">
                                <h5>Support</h5>
                            </div>
                            
                            <div className="footer-txt">
                                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            </div>
                            <div className="footer-txt">
                                <p>exclusive@gmail.com</p>
                            </div>
                            <div className="footer-txt">
                                <p>+88015-88888-9999</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="heading-txt-main-rapo">
                            <div className="footer-heading">
                                <h5>Accout</h5>
                            </div>
                            
                            <div className="footer-txt">
                                <p><a href="#">My Account</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Login / Register</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Cart</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Wishlist</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Shop</a></p>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="heading-txt-main-rapo">
                            <div className="footer-heading">
                                <h5>Quick Link</h5>
                            </div>
                            
                            <div className="footer-txt">
                                <p><a href="#">Privacy Policy</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Terms Of Use</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">FaQ</a></p>
                            </div>
                            <div className="footer-txt">
                                <p><a href="#">Contact</a></p>
                            </div>
                           
                           
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-lg-0 mb-md-5 mb-sm-5">
                        <div className="heading-txt-main-rapo">
                            <div className="footer-heading">
                                <h5>Download App</h5>
                            </div>
                            
                            <div className="footer-last-txt">
                                <p>Save $3 with App New User Only</p>
                            </div>
                            <div className="footer-playstore-img-main-rapo d-flex align-items-center">
                            <div className="footer-scan-img">
                               <img className='img-fluid' src={scanimg} alt="" />
                            </div>
                            <div className="footer-playstore-img-rapo d-grid">
                               <img className='img-fluid' src={playstore1} alt="" />
                               <img className='img-fluid' src={playstore2} alt="" />
                            </div>
                            </div>
                            <div className="footer-icon-rapo">
                               <div className="footer-icon-1">
                               <img className='img-fluid' src={IconFacebook} alt="" />
                               </div>
                               <div className="footer-icon-2">
                               <img className='img-fluid' src={Icontwitter} alt="" />
                               </div>
                               <div className="footer-icon-3">
                               <img className='img-fluid' src={Iconinsta} alt="" />
                               </div>
                               <div className="footer-icon-4">
                               <img className='img-fluid' src={Iconlinkdin} alt="" />
                               </div>
                            </div>
                            
                           
                           
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-txt">
                            <img className='img-fluid' src={ copyrighticon} alt="" />
                            <p>Copyright Rimel 2022. All right reserved</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    );
};

export default Footer;