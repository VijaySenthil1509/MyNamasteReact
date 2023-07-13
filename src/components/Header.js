import { LOGO_URL } from "../utlis/constant";
import { Link } from "react-router-dom";
import useOnlinests from "../utlis/useOnlinests";
import { useContext } from "react";
import userContext from "../utlis/usecontext";
const Header = () => {
  let online = useOnlinests();
  const details = useContext(userContext);
  return (
    <div className="flex items-center rounded-xl  m-5 justify-between p-5 bg-gray-300">
      <img
        className="w-20 h-20 rounded-xl"
        alt="logo-image"
        src={LOGO_URL}
      ></img>
      <ul className="flex pr-10 ">
        <li className="p-5">Online: {online ? "👍🏻" : "👎🏻"}</li>
        <li className="p-5">
          <Link to="/">menu</Link>
        </li>
        <li className="p-5">
          <Link to="/about">About us</Link>
        </li>
        <li className="p-5">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="p-5">{details.user.name}</li>
        <li className="p-5">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
