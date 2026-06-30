import React from 'react';
import ReactDOM from "react-dom/client";



const RestaurantCard =({data})=>{
    const {name,
        cuisines,
        rating,
        costForTwo,
        deliveryTime,
        image,} = data;

        
    return(
     <div className='restro-card m-3 p-2 rounded-lg bg-grey-50 hovar:bg-grey-400'>
        <img src={image} className='res-logo' alt='res-image'></img>
      <h3 className='font-bold py-4'>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {rating}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime}</p>
     </div>
    )
};

// Higher order fun are the pure function
//Higher order component -

// Input RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
        <div>
            <label className="promoted-label">promoted</label>
            <RestaurantCard {...props}/>
        </div>
    )
  };
};

export default RestaurantCard;