import {CON_URL} from '../utils/constants';
const RestaurantCard=(props)=>{
    const {resData} = props;
  
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.data;//Optional Chaining.
    return(
      <div className="restaurant-card">
        <img 
        className="restaurant-logo"
        src={
          CON_URL +
          cloudinaryImageId
        } 
        alt="food-card"
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime} MINS</h4>
      </div>
    )
  }
  export default RestaurantCard;