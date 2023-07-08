import { useState, useEffect } from "react";

const useRestaurant = (resid) => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    fetcho();
  }, []);
  const fetcho = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8113309&lng=80.2303145&restaurantId=" +
        resid
    );
    const data = await res.json();
    setRestData(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  };
  console.log("hai");
  return restData;
};
export default useRestaurant;
