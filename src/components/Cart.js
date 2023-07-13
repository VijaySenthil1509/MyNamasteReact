import { useSelector } from "react-redux";
import store from "../utlis/Store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <h1>Cart items</h1>
    </div>
  );
};
export default Cart;
