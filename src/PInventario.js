import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./router/AppRouter";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export const PInventario = () => {
    return(
        
        <RouterProvider router={AppRouter} />       
    )

}