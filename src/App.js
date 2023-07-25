import React from "react";
import ReactDOM from "react-dom";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Abouts from "./page/About";
import Contact  from "./page/Contact";
import Home from "./page/Home";
import Error from "./page/Error";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Error/>,
  },
  {
    path:"/about",
    element:<Abouts/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/home",
    element:<Home/>,
  },
]);


ReactDOM.render((<RouterProvider router={appRouter}/>), document.getElementById("root"));
