import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink,Outlet } from 'react-router-dom';

import "./index.css"; 


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Inventario
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/dispositivos"
                        >
                            Dispositivos Perifericos
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/gateway"
                        >
                            Listado de Gateway

                        </NavLink>
                    </div>
                </div>                
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}