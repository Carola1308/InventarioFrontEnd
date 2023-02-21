import React from 'react'
import { useEffect, useState} from 'react';
import DataTable,{ createTheme }  from 'react-data-table-component';
import { Link } from 'react-router-dom';

const tableCustomStyles = {
  headCells: {
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      paddingLeft: '0 8px',
    },
  },
}    

const columns = [
      
    {
        name: 'Name',
        selector: row => row.gatewayName,
        style: {fontSize: '20px'}
    },
    {
        name: 'IPv4',
        selector: row => row.ipV4,
        style: {fontSize: '20px'}
        

    },
    {
        name: 'peripheralDevices',
        selector: row => row.peripheralDevices.vendor,
        style: {fontSize: '20px'}
    },
    {
				
      cell: (row) => <button class="btn btn-primary" >
                        <Link to = {`/gateway/edit-gateway/${row.id}`} style = {{color: "white"}}>
                          Details
                        </Link>
                    </button>,      
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
				
      cell: () => <button className='btn btn-danger'>Delete</button>,      
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    
    ];
  


export const Listado = ({publisher}) => {
    
    const [peticion, setPeticion] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7034/api/inventario/gateways')
          .then((response) => {             
             return response.json();                          
          })
          .then((peticion) => {
            setPeticion(peticion)
            console.log(peticion)
          })
      }, [])
          
      return (
        <div >
        <DataTable
            columns={columns}
            data={peticion}
            pagination 
            BuiltinStory  
            FixedHeaderStory fixedHeader
            fixedHeaderScrollHeight="300px"
            customStyles={tableCustomStyles}
        />
        </div>
    );
    
  }