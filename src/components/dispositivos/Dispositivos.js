import React from 'react'
import { ListadoDispositivos } from "./ListadoDispositivos/ListadoDispostivos"
import { Link } from 'react-router-dom';

export const Dispositivos = () => {
  return (
    <>
      
      <div className="row" style={{textAlign:"center", paddingTop: "10px"}}>
        <h1>Listado de Dispositivos</h1>
        <hr />
      </div>
      
      <div className='container'>
        <ListadoDispositivos />
      </div>

      <div className="container" style={{textAlign:"center"}}>
        <button class="btn btn-primary" > 
          <Link style={{marginLeft:"auto", paddingTop: "10px", color: "white"}}  to={`./add-dispositivo`}>
            Add 
          </Link>
        </button>
      </div>
    </>
  )
}
