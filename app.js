import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>namaste</h1>;

const Fun = () => (
  <>
    <h1>came from function</h1>
  </>
);

const Fun2 = () => (
  <>
    <h2>h2 da idhu</h2>
    <Fun></Fun>
  </>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
const root2 = ReactDOM.createRoot(document.querySelector(".root2"));
root.render(<Fun />);
root2.render(<Fun2 />);
