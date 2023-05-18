import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerEffect from "./Shimmer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const searchData = (searchText, allRestaurants) => {
  const newSearchList = [];
  if (searchText.length == 0) {
    return allRestaurants;
  }
  
  for (let i = 0; i < allRestaurants.length; i++) {
    if (
      allRestaurants[i]?.data?.data?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    ) {
      newSearchList.push(allRestaurants[i]);
    }
  }
  return newSearchList;
};

const filterData = (allRestaurants) => {
  const newfilterRes=[];
  for(let i=0; i < allRestaurants.length; i++){
  if(allRestaurants[i].data?.data?.avgRating > 4.5){
    newfilterRes.push(allRestaurants[i]);
  }
}
console.log(newfilterRes);
  return newfilterRes;
};

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [List, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      getRestaurants();
    } catch (error) {
      console.error(error);
    }
  });

   

  async function getRestaurants() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.901685441214399&lng=77.63361502210223&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    setRestList(json?.data?.cards);
    setSearchList(json?.data?.cards);
    setList(json?.data?.cards);
  }

  // not render component(Early render)
  if (!restList) return null;
  

  return (
    <>
      {restList.length == 0 ? (
        <div className="shimmer-effect">
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
          <ShimmerEffect />
        </div>
      ) : (
        <div className="body-container">
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
              const filterList = filterData(restList);
              setList(filterList);
              }}
            >
              Top Rated Restuarant
            </button>
          </div>


          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>

            <button
              className="search-btn"
              onClick={() => {
                const data = searchData(searchText, restList);
                console.log(data);
                setSearchList(data);
              }}
            >
              Search
            </button>
          </div>

          <div className="rest-container">
            {searchList?.map((res) => (
              <RestaurantCard {...res?.data?.data} key={res?.data?.data?.id} />
            ))}
          </div>

          <div className="rest-container">
            {List?.map((res) => (
              <RestaurantCard {...res?.data?.data} key={res?.data?.data?.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
