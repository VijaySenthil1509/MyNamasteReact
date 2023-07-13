import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import userContext from "./utlis/usecontext";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utlis/Store";
const Applayout = () => {
  const [data, setData] = useState({
    user: {
      name: "sri",
      email: "sri@gmail.com",
    },
  });
  return (
    <div className="app-layout">
      <Provider store={store}>
        <userContext.Provider value={{ user: data.user, setUser: setData }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </div>
  );
};
const About = lazy(() => import("./components/About"));
const App = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={App} />);
