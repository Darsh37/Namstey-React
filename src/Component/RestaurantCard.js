import { CDN_URL } from "../utils/Constants";


const RestaurantCard =(props)=>{
  const {name,cuisines,costForTwoString,avgRating,slaString} = props;

  return(
      <>
      <div className='rest-card'>
      <img className='menu-img' alt="biryani" src={CDN_URL+'/'+ props?.cloudinaryImageId}/>
      <div className="menu-name">{name}</div>
      <div className="cuisines">{cuisines}</div>
      <div className="menu-details">
      <p>{costForTwoString}</p>
      <p>{avgRating}</p>
      <p>{slaString}</p>
      </div>
      </div>
      </>
    )
  }

  export default RestaurantCard;