import React, { useState,useCallback} from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/NavBar.css';


const NavBar = (props) => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleClick = useCallback(() => {
    setIsResponsive(!isResponsive);
  }, [isResponsive]);
 
  return (
    <nav className={`navbar navbar-expand-lg ${isResponsive ? 'responsive' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#exclusive">
          Exclusive
        </a>
        <button className="navbar-toggler" type="button" onClick={handleClick}>
          <i className="fa-solid fa-sliders"></i>
        </button>
        <div className={`collapse navbar-collapse ${isResponsive ? 'show' : ''}`} id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Pagenotfound">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Pagenotfound">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>
                Sign Up
              </Link>
            </li>
          </ul>
          <form className="form-input d-flex">
            <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          <div className="heart-icon d-md-flex justify-content-md-center mt-md-5 d-sm-flex justify-content-sm-center mt-lg-0 mt-sm-5">
            <img className="img-fluid" src={props.HeartIcon} alt="" />
            <img className="img-fluid" src={props.ShopIcon} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
