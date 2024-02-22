import React from 'react';
import '../PageNotFound/PageNotFound.css';
import Topheadline from '../TopHeadline/TopHeadline';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

import {Link} from 'react-router-dom';
const PageNotFound= (props) => {
    return (
        <>
            <Topheadline />
            <NavBar />
            <div className="container">
                <div className="row ">
                  
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <div className="page-not-found">
                           <p>Home  /<span className='error'>404Error</span></p>
                        </div>
                    </div>
                 
                </div>
                <div className="row ">
                  
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="page-not-found-heading text-center d-flex justify-content-center">
                           <h2>404 Not Found</h2>
                           <p>Your visited page not found. You may go home page.</p>
                        </div>
                    </div>
                 
                </div>
                
                <div className="row ">
                  
                  <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="page-not-found-btn text-center d-flex justify-content-center">
                      <Link to='/Home'><button type="button" class="btn PNF-btn">Back to home page</button></Link>
                      </div>
                  </div>
               
              </div>
            </div>


            <Footer />
        </>
    );
};

export default PageNotFound;