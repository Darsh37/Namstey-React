import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerEffect from "./Shimmer";
import SearchComponent from "./SearchComponent";
import getRestaurants from "./ApiServices";
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

const filterData = (allRestaurants) => {
  console.log(allRestaurants);
  const newFilterRes = allRestaurants.cards?.filter(
    (card) => card.data.data.avgRating > 4.5
  );
  console.log(newFilterRes);
  return newFilterRes;
};

const Body = () => {
  const [restList, setRestList] = useState([]);
  
  useEffect(() => {
    getRestaurants()
      .then((restaurants) => {
        setRestList(restaurants.data);
        console.log(restaurants);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // not render component(Early render)
  if (!restList) return null;
  
  const handleFilter = () => {
    const filteredList = filterData(restList);
    setRestList(prevList => {
      return { ...prevList, cards: filteredList };
   
    });
};
  

  return (
    <>
      {restList.length == 0 ? (
        <div className="shimmer-effect">
          <ShimmerEffect />
        </div>
      ) : (
        <div className="body-container">
          <div className="filter">
            <Button
              className="filter-btn"
              onClick={handleFilter}
            >
              Top Rated Restuarant
            </Button>
          </div>

          <div className="search-container">
            <SearchComponent />
          </div>

          <div className="rest-container">
            {restList?.cards?.map((res) => (
              <RestaurantCard {...res?.data?.data} key={res?.cards?.data?.data?.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
