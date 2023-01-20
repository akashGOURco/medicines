import React from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import MedicineDetails from "../MedicineDetails";
import Login from "../layouts/auth/Login";
import Home from "../layouts/home/Home";
import MedicineMainDetails from "../layouts/medicine/MedicineMainDetails";
// import Home from "../layouts/home/Home";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Navigate replace to="login" />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/admin",
      element: <MedicineDetails />,
      children: [
        {
          path: "",
          element: <Navigate replace to="home" />,
        },
        {
          path: "home",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "medicinefulldetails",
              element: <MedicineMainDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;
