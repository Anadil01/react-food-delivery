import React from 'react';
import ReactDOM from "react-dom/client";
import { restaurantList } from "../utils/mockData";
import RestronantCard from './RestronantCard';




const Body =()=>{
    // State variable - super powerful variable
    // A hook is a normal javascript function which is given by react , in this react give some super power  
    // these all are known as React hooks


    return(
        <div className='body'>
            <div className='filter'>
              <button className='filter-btn' onClick={()=>{
                let restaurantList = restaurantList.filter((res)=> res.rating > 4);
              }}>Top Rated ⭐ Restronant</button>
            </div>
            <div className='res-container'>
               
               {
                restaurantList.map((restaurant)=> (
                    <RestronantCard
                     key={restaurant.id}
                     data={restaurant}
                    />
                ))
               }
               
            </div>

        </div>
    )
}

export default Body;