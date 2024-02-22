import React from 'react';
import './CategoriesItems.css';


const Items = (props) => {
    return (
        <>
  <div className="icon-text-rapo">
    <div className={`${props.css}`}>
      <img className='img-fluid' src={props.itemimg} alt="" />
      <p>{props.itemname}</p>
    </div>
  </div>
        </>
    );
};

export default Items;