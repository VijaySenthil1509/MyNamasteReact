import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
const Applayout = () => (
  <div className="app-layout">
    <Header />
    <Outlet />
  </div>
);
const About = lazy(() => import("./components/About"));
const App = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>kkkkkkkkkkkk</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/rest/:resid",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={App} />);
