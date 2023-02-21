import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Gateways } from "../components/gateways/Gateways";
import { Navbar } from "../components/iu/Navbar";
import { Dispositivos } from "../components/dispositivos/Dispositivos";
import { GatewayForm } from "../components/gateways/gatewayForm/gatewayForm";
import { DispositivosForm } from "../components/dispositivos/DispositivosForm/DispositivosForm";
import { DispositivoEdit } from "../components/dispositivos/EditarDispositivo/DispositivoEdit";
import { GatewayEdit } from "../components/gateways/EditarGateway/GatewayEdit";



  export const AppRouter = createBrowserRouter([
    
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
            path: "/gateway",
            element: <Gateways />,            
        },
        {
          path: "/gateway/edit-gateway/:id",
          element: <GatewayEdit />,            
        },
        {
          path: "/gateway/add-gateway",
          element: <GatewayForm />,            
        },
        {
            path: "/dispositivos",
            element: <Dispositivos />,            
        },
        {
          path: "/dispositivos/edit-dispositivo/:id",
          element: <DispositivoEdit />,            
      },
        {
          path: "/dispositivos/add-dispositivo",
          element: <DispositivosForm />,            
        },
      ],
    },
    
    
  ]);