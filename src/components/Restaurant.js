import { useParams } from "react-router-dom";
import useRestaurant from "../utlis/useRestaurant";
const Restaurant = () => {
  const { resid } = useParams();
  const restData = useRestaurant(resid);
  if (restData === []) return;
  return (
    <div>
      {restData.map((ele) => {
        return (
          <>
            <h1>{ele.card.card.title ? ele.card.card.title : ""}</h1>
            <ul>
              {ele.card.card.categories
                ? ele.card.card.categories[0].itemCards.map((ele) => (
                    <li>
                      {ele.card.info.name} , Rs={ele.card.info.price / 100}
                    </li>
                  ))
                : ""}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Restaurant;
