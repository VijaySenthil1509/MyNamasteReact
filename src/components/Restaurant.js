import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../utlis/CartSlice";
import useRestaurant from "../utlis/useRestaurant";
const Restaurant = () => {
  const { resid } = useParams();
  const restData = useRestaurant(resid);
  if (restData === []) return;
  const dispatch = useDispatch();
  const addtocart = (ele) => {
    dispatch(addItems(ele));
  };
  return (
    <div>
      {restData.map((ele) => {
        return (
          <>
            <h1>{ele.card.card.title ? ele.card.card.title : ""}</h1>
            <ul>
              {ele.card.card.categories
                ? ele.card.card.categories[0].itemCards.map((ele) => {
                    return (
                      <div className="flex items-center">
                        <li>
                          {ele.card.info.name} , Rs={ele.card.info.price / 100}
                        </li>
                        <li>
                          <button
                            className="bg-green-100 m-4 px-2 rounded-lg"
                            onClick={(e) => {
                              addtocart(ele.card.info);
                            }}
                          >
                            Add to Cart
                          </button>
                        </li>
                      </div>
                    );
                  })
                : ""}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Restaurant;
