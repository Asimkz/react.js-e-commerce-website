import React from 'react';
import '../ProductCard/ProductCard.css';
// import CardImg from '../../images/g92-2-500x500 1 (1).png'
import HeartImg from '../../images/Fill Heart.png'
import FillEye from '../../images/Fill Eye.png'
import iconyellow from '../../images/Vector-y.png'
const CardOne = ({ SighnUpDataPass,NavData, ...props }) => {
    
    // ... rest of your code
  
  
  
    return (

        <>
            <div class="card h-100">

                <div class="card-body product-card-body">
                    <button type='button' className='btn'>Add to Card</button>
                    <div className="card-img d-flex justify-content-center" >
                        <img className="card-img-top" src={props.CardImg} alt="..." />

                        <img className='hert-img' src={HeartImg} alt="" />
                        <img className='eye-img' src={FillEye} alt="" />
                        <p className={`${props.tagcss}`}> {props.tagpercent}</p>
                   
                    </div>
                </div>
                <div className="card-footer product-card-footer">
                    <div className={`${props.chcss}`}>
                        <h5 class="card-heading">{props.CardHeading}</h5>
                    </div>
                    <div className={`${props.picss}`}>
                        <p class="product-price">{props.CardPrice} <span>{props.CardSpanPrice}</span></p>
                        <div className="rating-stars d-flex">
                            <img className='img-fluid' src={iconyellow} alt="" />
                            <img className='img-fluid' src={iconyellow} alt="" />
                            <img className='img-fluid' src={iconyellow} alt="" />
                            <img className='img-fluid' src={props.iconone} alt="" />
                            <img className='img-fluid' src={props.icontwo} alt="" />

                            <p>{props.RatingNum}</p>
                           
                            
                        </div>
                    </div>
                    {SighnUpDataPass && (
        <div>
          <p>Username: {SighnUpDataPass.name}</p>
          <p>Userpass: {SighnUpDataPass.password}</p>
          <p>Useremail: {SighnUpDataPass.email}</p>
          {/* <p>Password: {LoginFormData.pass}</p> */}
        </div>
      )}
      {NavData && (
        <div>
          <p>Username: {NavData.name}</p>
          
          {/* <p>Password: {LoginFormData.pass}</p> */}
        </div>
      )}
      
                
                </div>

            </div>
        </>
    );
};

export default CardOne;