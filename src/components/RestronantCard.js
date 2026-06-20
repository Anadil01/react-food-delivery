import React from 'react';
import ReactDOM from "react-dom/client";



const RestronantCard =({data})=>{
    const {name,
        cuisines,
        rating,
        costForTwo,
        deliveryTime,
        image,} = data;
    return(
     <div className='restro-card' style={{margin:"3px", backgroundColor:"lightgrey" , padding:"10px"}}>
        <img src={image} className='res-logo' alt='res-image'></img>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {rating}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime}</p>
     </div>
    )
};

export default RestronantCard;