import React from 'react';
import "./styles.css";

export const Propducts = () => {
    const productImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq"
  
  return (
    <div className="main_ProductContainer">
        <div className="product_Card">
    <div>
      <img src={productImg} alt="product Image" className='product_Image' />
    </div>
    <div className="product_Name">
      Dominos's Pizza 
    </div>
    <div className="rating_AndTimeTaken">
      <div className="rating">4.1</div>
      <div className="time_Taken">25 mins</div>
    </div>
    <div className="product_Info">
      <p>Pizza , Italian , Desserts , Daryajan</p>
    </div>
</div>

<div className="product_Card">
    <div>
      <img src={productImg} alt="product Image" className='product_Image' />
    </div>
    <div className="product_Name">
      Dominos's Pizza 
    </div>
    <div className="rating_AndTimeTaken">
      <div className="rating">4.1</div>
      <div className="time_Taken">25 mins</div>
    </div>
    <div className="product_Info">
      <p>Pizza , Italian , Desserts , Daryajan</p>
    </div>
</div>

<div className="product_Card">
    <div>
      <img src={productImg} alt="product Image" className='product_Image' />
    </div>
    <div className="product_Name">
      Dominos's Pizza 
    </div>
    <div className="rating_AndTimeTaken">
      <div className="rating">4.1</div>
      <div className="time_Taken">25 mins</div>
    </div>
    <div className="product_Info">
      <p>Pizza , Italian , Desserts , Daryajan</p>
    </div>
</div>

<div className="product_Card">
    <div>
      <img src={productImg} alt="product Image" className='product_Image' />
    </div>
    <div className="product_Name">
      Dominos's Pizza 
    </div>
    <div className="rating_AndTimeTaken">
      <div className="rating">4.1</div>
      <div className="time_Taken">25 mins</div>
    </div>
    <div className="product_Info">
      <p>Pizza , Italian , Desserts , Daryajan</p>
    </div>
</div>
    </div>
  )
}
