import { useEffect } from "react";

const API_BASE_URL = "https://www.swiggy.com/dapi/restaurants/l44444ist/v5?lat=12.901685441214399&lng=77.63361502210223&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"

const getRestaurants = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error retrieving restaurants:', error);
      throw error;
    }
  };

  export default getRestaurants;
  
  // useEffect(() => {
  //   try {
  //     getRestaurants();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [7000000]);
  // async function getRestaurants() {
  //   const data = await fetch(
  //     " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.901685441214399&lng=77.63361502210223&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log("Check")
  //   console.log(json);
  //   return json;
  // }


// export default ApiServices;
