import React from 'react'
import { useEffect, useState} from 'react';
import DataTable,{ createTheme }  from 'react-data-table-component';
import { Link } from 'react-router-dom';



const tableCustomStyles = {
  headCells: {
    style: {
      fontSize: '22px',
      fontWeight: 'bold',
      paddingLeft: '0 8px',
    },
  },
}   

const columns = [
    {
        name: 'Vendor',
        selector: row => row.vendor,
        style: {fontSize: '18px'}
    },
    {
        name: 'Status',
        selector: row => row.status.toString(),
        style: {fontSize: '18px'}
    },    
    {
        name: 'Created on',
        selector: row => row.creationDate,
        style: {fontSize: '18px'}
    },
    {
				
      cell: (row) => <button class="btn btn-primary" >
                                <Link to = {`/dispositivos/edit-dispositivo/${row.id}`} style = {{color: "white"}}>
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
//

export const ListadoDispositivos = ({publisher}) => {
    
    const [peticion, setPeticion] = useState([]);


    useEffect(() => {
        fetch('https://localhost:7034/api/inventario/peripheral-device')
          .then((response) => {             
             return response.json();                          
          })
          .then((peticion) => {
            setPeticion(peticion)
            console.log(peticion)
          })
      }, [0])
          
      return (
        <DataTable
            columns={columns}
            data={peticion}
            pagination 
            BuiltinStory  theme="default"
            FixedHeaderStory fixedHeader
            fixedHeaderScrollHeight="300px"
            customStyles={tableCustomStyles}
        />
    );
  }
    
