import React from 'react';
import '../Banner/Banner.css'
import BannerImage from '../../images/hero_endframe__cvklg0xk3w6e_large 2.png'
import appleimg from '../../images/1200px-Apple_gray_logo 1.png'
const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 d-md-flex justify-content-md-start  d-lg-flex justify-content-lg-start d-sm-flex justify-content-sm-center text-lg-start  text-md-start text-sm-center mb-lg-0 mb-md-0 mb-sm-5  " id="banner-text">
                            <div className='sidemenu-content d-grid'>
                                <select class=" second-form-selector text-lg-start text-md-start text-sm-center" aria-label="Default select example">
                                    <option className='form-selector-content' selected>Woman’s Fashion</option>
                                    <option className='form-selector-content' value="1">One</option>
                                    <option v value="2">Two</option>
                                    <option className='form-selector-content' value="3">Three</option>
                                </select>
                                <select class="second-form-selector text-lg-start text-md-start text-sm-center" aria-label="Default select example">
                                    <option className='form-selector-content' selected>Men’s Fashion</option>
                                    <option className='form-selector-content' value="1">One</option>
                                    <option className='form-selector-content' value="2">Two</option>
                                    <option className='form-selector-content' value="3">Three</option>
                                </select>
                                <p className='form-selector-content'><a href='#'>Electronics</a></p>
                                <p className='form-selector-content'><a href='#'>Home & Lifestyle</a></p>
                                <p className='form-selector-content'><a href='#'>Medicine</a></p>
                                <p className='form-selector-content'><a href='#'>Sports & Outdoor</a></p>
                                <p className='form-selector-content'><a href='#'>Baby’s & Toys</a></p>
                                <p className='form-selector-content'><a href='#'>Groceries & Pets</a></p>
                                <p className='form-selector-content'> <a href='#'>Health & Beauty</a></p>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="icon-text-main-rapo">
                                                    <div className="icon-heading-rapo  d-flex align-items-center">
                                                        <img className='img-fluid' src={appleimg} alt="" />
                                                        <h2>iPhone 14 Series</h2>
                                                    </div>
                                                    <div className="banner-heading  d-grid justify-content-start">
                                                        <h1>Up to 10% <br/>off Voucher</h1>
                                                    </div>
                                                    <div className="shopnow-link">
                                                        <p><a href="#">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-img">
                                                <img className='img-fluid' src={BannerImage} alt="Your Image" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Banner;