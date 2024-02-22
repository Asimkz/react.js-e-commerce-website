import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Topheadline from './component/TopHeadline/TopHeadline';
import NavBar from './component/Navbar/NavBar.jsx';
import Banner from './component/Banner/Banner.jsx';
import SaleProduct from './component/Sales/SalesProduct.jsx';
import Categories from './component/Categories/Categorius.jsx';
import SellingProduct from './component/SellingProduct/SellingProduct.jsx';
import SecondBanner from './component/SecondBanner/SecondBanner.jsx';
import Product from './component/Product/Product.jsx';
import Features from './component/Feactures/Fetures.jsx';
import DiliveryService from './component/DiliveryService/DililveryService.jsx';
import Footer from './component/Footer/Footer.jsx';
import HI from './images/HI.png';
import SI from './images/SI.png';
import SighnUp from './component/SighnUp/SighnUp.jsx';
import LoginForm from './component/LoginForm/Login.jsx';
import PageNotFound from './component/PageNotFound/PageNotFound.jsx';
import DisplayLoginData from './component/DisplayLoginData/DisplayLoginData.jsx';
import ProductCard from './component/ProductCard/ProductCard.jsx';
function App(props) {
const [dataForm, setDataForm] = useState("")
const [signupdata, setSignUpData] = useState("")
const getdata=(data)=>{
setDataForm(data);
}
const getanotherdata=(datatwo)=>{
  setSignUpData(datatwo);
}
const handleInput = (inputData) => {
  console.log(inputData); // Now you have access to the input data in App.js
};



  return (

    <>
    {/* <DisplayLoginData LoginData={dataForm}/> */}
      <div>
      </div>
      <Routes>
        <Route path="/" element={<SighnUp OnName={getanotherdata}/>} />
        <Route path='/Home' element={
          <>
          
            <Topheadline shopName="xyz" name/>
            <NavBar HeartIcon={HI} ShopIcon={SI} />
            <Banner />
            <SaleProduct />
            <Categories />
            <SellingProduct />
            <SecondBanner />
            <Product SighnUpData={signupdata} />
            <Features />
            <DiliveryService />
            <Footer />

          </>
        } />

        <Route path="/login" element={<LoginForm OnName={getdata} />} />
        <Route path="/Pagenotfound" element={<PageNotFound />} />
      </Routes>


    </>
  );
}

export default App;
