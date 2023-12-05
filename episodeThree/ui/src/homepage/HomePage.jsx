import React from 'react';
import "./styles.css";
import { Propducts } from './products/Propducts';

export const HomePage = () => {

  return (
    <div className="main_HomeContainer">
        <div className="search">
          <input placeholder='Search...' className='search_Input'/>
          <button  className='search_Buttton'>Search</button>
        </div>
       <Propducts />
    </div>
  )
}
