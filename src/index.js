import React from 'react';
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/AppRouter";
import {PInventario} from './PInventario';





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PInventario />
  </React.StrictMode>
);