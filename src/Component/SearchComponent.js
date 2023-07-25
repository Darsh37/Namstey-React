import React, { useEffect, useState } from "react";
import getRestaurants from "./ApiServices";
import RestaurantCard from "./RestaurantCard";

const searchData = (searchText, allRestaurants) => {
  console.log(allRestaurants)
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
  console.log(newSearchList);
  return newSearchList;
};

function SearchComponent() {
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
     getRestaurants()
      .then((restaurants) => {
        setSearchList(restaurants);
        console.log(setSearchList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [70000]);

  return (
    <div>
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
          const data = searchData(searchText, searchList);
          console.log(data);
          setSearchList(data);
        }}
      >
        Search
      </button>
      <div className="rest-container">
        {searchList?.cards?.map((res) => (
          <RestaurantCard {...res?.data?.data} key={res?.data?.data?.id} />
        ))}
      </div>
    </div>
  );
}
4
export default SearchComponent;
