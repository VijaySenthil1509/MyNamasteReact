import { LOGO_URL } from "../utlis/constant";
import { Link } from "react-router-dom";
import useOnlinests from "../utlis/useOnlinests";
const Header = () => {
  let online = useOnlinests();
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
          <Link to="/rest">Contact us</Link>
        </li>
        <li className="p-5">cart</li>
      </ul>
    </div>
  );
};
export default Header;
