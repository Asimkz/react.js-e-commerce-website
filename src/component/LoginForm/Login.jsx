import React from 'react';
import '../SighnUp/SighnUp.css';
import './login.css';
import Topheadline from '../TopHeadline/TopHeadline';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import beatsnoop from '../../images/dl.beatsnoop 1.png'
// import googleicon from '../../images/Icon-Google.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
// import DisplayLoginData from '../DisplayLoginData/DisplayLoginData';
const LoginForm = (props) => {
    // console.log(props)
    
const [details, setDetails ]= useState({
name:'',
password:'',
number:'',
email:'',
})
    const handlechange=(e)=>{
    
        // e.preventDefault();
    const {name,value}=(e.target);
    setDetails((prev)=>{return{...prev,[name]:value};})
    }

const handlesubmit=(e)=>{
 e.preventDefault();
 props.OnName(details)
}
 
    return (
      <>
        <Topheadline />
        <NavBar />
        <div className="container-fluid Sigh-up-container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="sighnup-img">
                <img className="img-fluid" src={beatsnoop} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-grid justify-content-center">
              <form onSubmit={handlesubmit}>
                <div className="sighnup-heading-subheading mb-0 mt-5">
                  <h3>Log in to Exclusive</h3>
                  <p class="lead">Enter your details below</p>
                </div>
                <div className="sighn-up-form">
                  <div class="sighn-up-div ">
                    <input
                      type="text"
                      class="custom-form-control sighn-up-input"
                      placeholder="name"
                      autoComplete="off"
                      name="name"
                      onChange={handlechange}
                    />
                  </div>

                  <div class="sighn-up-div ">
                    <input
                      type="password"
                      class="custom-form-control sighn-up-input"
                      placeholder="Password"
                      autoComplete="off"
                      name="password"
                      onChange={handlechange}
                    />
                  </div>
                  <div class="sighn-up-div ">
                    <input
                      type="number"
                      class="custom-form-control sighn-up-input"
                      placeholder="number"
                      autoComplete="off"
                      name="number"
                      onChange={handlechange}
                    />
                  </div>
                  <div class="sighn-up-div ">
                    <input
                      type="email"
                      class="custom-form-control sighn-up-input"
                      placeholder="email"
                      autoComplete="off"
                      name="email"
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="btn-link-rapo">
                  <Link to="/Home">
                    <button type="submit" class="btn login-btn">
                      Login
                    </button>
                  </Link>
                  <p href="#">Forget Password?</p>
                </div>
                <button type="submit" class="btn login-btn mt-5">
                  submit
                </button>
              </form>
              <div></div>
            </div>
          </div>
        </div>
        {/* 
<DisplayLoginData LoginForm={props.name.pass} /> */}
        <Footer />
      </>
    );
};

export default LoginForm;
