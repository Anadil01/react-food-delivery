import { useParams } from "react-router-dom";
import { restaurantList as resData } from "../utils/mockData";

export const RestaurantMenu = ()=>{
  const {id } = useParams();
  console.log("URL id:", id);
  console.log("Restaurant List:", resData);
  const restaurant = resData.find((res) => res.id === id);

  if(!restaurant){
    return<h2>Restaurant Not Founds</h2>
  }

    return(
      <div className="menu">
      <img src={restaurant.image} alt={restaurant.name} width="300" />
    
      <h1>{restaurant.name}</h1>
    
      <h2>⭐ {restaurant.rating}</h2>
    
      <h3>{restaurant.cuisines.join(", ")}</h3>
    
      <h3>{restaurant.costForTwo}</h3>
    
      <h3>{restaurant.deliveryTime}</h3>
    
      <h2>Menu</h2>
    
      <ul>
        {restaurant.menu?.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
    )
}