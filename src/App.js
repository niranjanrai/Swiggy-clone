import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RestuarantList } from "./Constant";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";
const el = document.getElementById("root");

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <RestuarantMenu />,
      },
    ],
  },
]);

// createRoot(el).render(<RouterProvider router={appRouter} />);
createRoot(el).render(<RestuarantMenu />);
