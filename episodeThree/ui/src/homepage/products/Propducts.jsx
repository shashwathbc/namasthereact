import React from "react";
import "./styles.css";
import Data from "./ProductData";

export const Propducts = () => {

  return (
    <div className="main_ProductContainer">
         {
            Data?.map((item)=>(
              <div className="product_Card">
                 <div>
          <img 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
            alt={item.info.name}
             className="product_Image" 
             />
        </div>
        <div className="product_Name">{item?.info?.name}</div>
        <div className="rating_AndTimeTaken">
          <div className="rating" style={{color:"green"}}>{item?.info?.avgRating}</div>
          <div className="time_Taken">{item.info.sla.slaString}</div>
          <div className="time_Taken" style={{color:"green"}}>{`$${item.info.sla.deliveryTime}`}</div>
        </div>
        <div>
          <p className="product_Info">
            {item?.info?.cuisines}
          </p>
        </div>
        </div>
            ) )
         }
      </div>
  );
};
