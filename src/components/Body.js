import { useState, useEffect} from "react";
import { restaurantList as resData } from "../utils/mockData";
import RestronantCard from "./RestronantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);



  useEffect(()=>{
   fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.32750&lng=78.03250&carousel=true&third_party_vendor=1"
    );
   const json  = await data.json();
  
   const restaurants =
   json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

 console.log(restaurants);

 setListOfRestaurants(restaurants);
   
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resData.filter(
              (res) => res.rating > 4
            );


            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated ⭐ Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestronantCard
            key={restaurant.id}
            data={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;