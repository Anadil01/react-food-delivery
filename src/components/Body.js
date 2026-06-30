import { useState, useEffect} from "react";
import { restaurantList as resData } from "../utils/mockData";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText , setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);   
  // Whenever the state variable updates react trigger the reconcilation cycle - it will rerender the component
 

  useEffect(()=>{
   setListOfRestaurants(resData);
  },[]);

console.log("body component");

const onlineStatus = useOnlineStatus();

if(onlineStatus=== false){
  return<h1>Looks like you are offline!! please check your connection</h1>
}

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input type="text" placeholder="Search here" className="search-box border border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button className="border p-1 bg-green-300 rounded-lg" onClick={()=>{
            console.log(searchText);
            const filterRestro = resData.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()));
           
            setListOfRestaurants(filterRestro);
            
          }}>Search</button>
        </div>
        <button
          className="filter-btn border m-3 p-1 rounded-lg"
          onClick={() => {
            const filteredList = resData.filter(
              (res) => res.rating > 4
            );


            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated ⭐ Restaurant
        </button>
        <button className="reset-btn border m-3 p-1 rounded-lg " onClick={()=>{
          setListOfRestaurants(resData);
        }}>Reset</button>
      </div>

      <div className="res-container">
       { listOfRestaurants.length ===0 ? (
        <h2>No Restaurants Found 😔</h2>
       ):
        listOfRestaurants.map((restaurant) => (
          <Link 
          key={restaurant.id}
          to={"/restaurant/" + restaurant.id}
          >
            {restaurant.promoted ? (
              <RestaurantCardPromoted data={restaurant}/>) :  (<RestaurantCard data={restaurant}   />
            )}


          </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;