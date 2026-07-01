import { useParams } from "react-router-dom";
import {useState} from 'react';
import { restaurantList as resData } from "../utils/mockData";
import MenuCategory from "./MenuCategory";

export const RestaurantMenu = ()=>{
  const [showIndex, setShowIndex] = useState(0);
 
  const {id } = useParams();
  const restaurant = resData.find((res) => res.id === id);

  if(!restaurant){
    return<h2>Restaurant Not Founds</h2>
  }

    return(
      <div className="menu">
      <h1>{restaurant.name}</h1>
      <p>⭐ {restaurant.rating } • {restaurant.costForTwo}</p>
      <h3>{restaurant.cuisines.join(", ")}</h3>
    
     {restaurant.menu.map((category , index)=> (

      <MenuCategory 
      key={category.title}
      data={category} 
      showItems={index=== showIndex}
      setShowIndex={()=> setShowIndex(showIndex === index ? null : index)}
      />
     ))}
    </div>
    );
};