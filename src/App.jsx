import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RestuarantList } from "./config/Constant.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";
import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
const el = document.getElementById("root");

// Domain: dev-vwy3rfhnxrqgerk7.us.auth0.com
// Client: PMmAYhvgopoBGpo22qYNThTm8lQAGasN

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
        path: "/resturant/:resId",
        element: <RestuarantMenu />,
      },
    ],
  },
]);

createRoot(el).render(
  <Auth0Provider
    domain="dev-vwy3rfhnxrqgerk7.us.auth0.com"
    clientId="PMmAYhvgopoBGpo22qYNThTm8lQAGasN"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);
