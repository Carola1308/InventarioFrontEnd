import React from 'react';
import { Link } from 'react-router-dom';
import {Listado} from './ListadoGateways/Listado';

export const Gateways = () => {
  return (
    <>
      <div className="row" style={{textAlign:"center", paddingTop: "10px"}}>
        <h1>Gateways</h1>
        <hr />
      </div>

      <div className='container' >
        <Listado />
      </div>

      <div className="container" style={{textAlign:"center"}}>
          <button class="btn btn-primary" >
            <Link style={{color: "white"}} to={`./add-gateway`}>
              Add
            </Link>
          </button>
        </div>
         
    </>
  )
}
