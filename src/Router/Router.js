import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Routes/Home";
import Layout from "../components/Layout";
import TeslaUsers from "../Routes/TeslaUsers";
import OtherEVs from "../Routes/OtherEvs";
import Reports from "../Routes/Reports";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/tesla-users", element: <TeslaUsers /> },
        { path: "/other-evs", element: <OtherEVs /> },
        { path: "/reports", element: <Reports /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
