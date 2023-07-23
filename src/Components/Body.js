import RestaurantCard from './RestaurantCard';
import {useState,useEffect} from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from './Shimmer';
// import restaurantList from '../utils/mockData';
const Body = ()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() =>{

        fetchData();

    },[]);

    const fetchData = async () => {
        const data = await fetch(swiggy_api_URL);
        // const data = await fetch(restaurantList)
        const json= await data.json();

        //console.log(json);

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };
    
    return listOfRestaurants?.length === 0 ? (
    <Shimmer/>
    ):(
      <div className="body">
        <div className="filter">
            <div className="search-box-filter">
                <input type="text"
                 className="search-box"
                 value={searchText}
                 onChange={(e)=>{
                    setSearchText(e.target.value);
                 }}
                 
                 />
                <button
                onClick={()=>{
                    //Filter the restaurant cards and update the ui
                    //searchText
                    // console.log(searchText);

                    const filteredRestaurant = listOfRestaurants.filter(
                        (restaurant)=>restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
                    );


                    setFilteredRestaurants(filteredRestaurant);
                }}
                
                >Search</button>
            </div>
            <button className="filter-btn"

            onClick={() =>{
              const filteredList = listOfRestaurants.filter(
                    (restaurants) => restaurants.data.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
                // setListOfRestaurants(filteredList);
                console.log(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="restaurant-container">
          {
            filteredRestaurants?.map((restaurant) =>(
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
          }
  
  
  
        </div>
      </div>
    )
  }
  export default Body;