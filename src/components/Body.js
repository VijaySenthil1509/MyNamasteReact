import RestCards from "./Restcard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useOnlinests from "../utlis/useOnlinests";

const Body = () => {
  let [ver, setver] = useState(true);
  let [dataa, setdata] = useState([]);
  const [text, setText] = useState("");
  const chn = () => {
    let newdata = dataa.filter((ele) => ele.data.avgRating > 4);
    // document.querySelector(".btn").innerHTML = "show all restaurant";
    setdata(newdata);
    setver(false);
  };
  const che = () => {
    apeData();
    setver(true);
    // document.querySelector(".btn").innerHTML = "show best restaurant";
  };
  const toFilter = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8113309&lng=80.2303145&page_type=DESKTOP_WEB_LISTING"
    );
    const da = await res.json();
    const data = da.data.cards[2].data.data.cards;
    let newdata = data.filter((ele) => {
      return ele.data.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log(newdata);
    if (newdata.length > 0) setdata(newdata);
    else apiData();
  };
  useEffect(() => {
    apeData();
  }, []);
  const apeData = async function () {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8113309&lng=80.2303145&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setdata(data.data.cards[2].data.data.cards);
  };

  let ff = useOnlinests();
  if (ff === false) return <h1>thappu</h1>;

  return (
    <div className="body-container">
      <div className="searchbar">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              toFilter();
            }}
          >
            search
          </button>
        </div>
        <button
          className="btn"
          onClick={(e) => {
            if (ver) chn();
            else che();
          }}
        >
          {ver ? "show best restaurant" : "show all restaurant"}
        </button>
      </div>
      <div className="res-container">
        {dataa.map((ele) => (
          <Link to={"/rest/" + ele.data.id} key={ele.data.id}>
            <RestCards Restdata={ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
