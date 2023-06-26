import React from "react";
import ReactDOM from "react-dom/client";

const Body = () => (
  <div className="body-container">
    <div>Search bar</div>
    <div className="res-container"></div>
  </div>
);

const Header = () => (
  <div className="header">
    <img
      className="logo-image"
      alt="logo-image"
      src="https://media.istockphoto.com/id/1218437637/vector/food-point-logo-design.jpg?s=1024x1024&w=is&k=20&c=1_5v1kzop2K2sQoVRVtySRzIWH1v0qi2HQNQEc5YEno="
    ></img>
    <ul>
      <li>About us</li>
      <li>Contact us</li>
      <li>cart</li>
    </ul>
  </div>
);

const Applayout = () => (
  <div className="app-layout">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Applayout />);
