import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../SighnUp/SighnUp.css';
import Topheadline from '../TopHeadline/TopHeadline';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import beatsnoop from '../../images/dl.beatsnoop 1.png'
import googleicon from '../../images/Icon-Google.png'
import { Link } from 'react-router-dom';
const SighnUp = (props) => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    const [sighnupdata, setSighnUpData] = useState({
        name: "",
        password: "",
        email: ""
    })
    const handlevalue = (e) => {
        const {name,value}=(e.target);
    setSighnUpData((prev)=>{return{...prev,[name]:value};})
    }
    const handlesubmitform = (e) => {
        e.preventDefault();
        props.OnName(sighnupdata);
    }
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [allEntry, setAllEntry] = useState([]);

    // const submitform= (e)=>{
    //     e.preventDefault();
    //  const newEntry ={name:name , email:email , password:password }
    //    setAllEntry ([...allEntry , newEntry ])

return (
  <>
    <Topheadline />
    <NavBar />
    <div className="container-fluid Sigh-up-container">
      <div className="row ">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="sighnup-img">
            <img className="img-fluid" src={beatsnoop} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-grid justify-content-center">
          <form onSubmit={handlesubmitform}>
            <div className="sighnup-heading-subheading mb-0 mt-5">
              <h3>Create an account</h3>
              <p class="lead">Enter your details below</p>
            </div>
            <div className="sighn-up-form">
              <div class="sighn-up-div ">
                <input
                  type="text"
                  class="custom-form-control sighn-up-input"
                  placeholder="Name"
                  autoComplete="off"
                  name="name"
                  onChange={handlevalue}
                />
              </div>
              <div class="sighn-up-div ">
                <input
                  type="email"
                  class="custom-form-control sighn-up-input"
                  placeholder="Email"
                  autoComplete="off"
                  name="email"
                  onChange={handlevalue}
                />
              </div>
              <div class="sighn-up-div ">
                <input
                  type="password"
                  class="custom-form-control sighn-up-input"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  onChange={handlevalue}
                />
              </div>
              <Link to="/login">
                <button type="submit" class="btn sighn-up-btn">
                  Create Account
                </button>
              </Link>
            </div>
            <button type="button" class="btn sighn-up-google-btn mt-3">
              <img className="img-fluid" src={googleicon} alt="Google Icon" />{" "}
              Sign up with Google
            </button>
            <button type="submit" class="btn sighn-up-google-btn mt-3">
              Submit
            </button>
            <div className="text-muted">
              <p class="">
                Already have an account? <a href="login.html">Login</a>
              </p>
            </div>
          </form>
          <div className="row">
            <div className="col-12">
              {/* {
        allEntry.map((curElem)=>{
return(
<div className='Datashowing'>
    <p className='mt-2'>Name=  {curElem.name}</p>
    <p className='mt-2'>Email=  {curElem.email}</p>
    <p className='mt-2'>Password=  {curElem.password}</p>
</div>

)
        })
    } */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

};
export default SighnUp;