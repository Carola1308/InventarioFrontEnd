import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GatewayEdit = () => {
  
    const params = useParams();

    const [formState, setFormState] = useState({
        gatewayName: '',
        ipV4: '',  
        peripheralDevices:[]      
        }
    );
    
    const { gatewayName, ipV4, peripheralDevices } = formState;

    useEffect (() => {
        fetch(`https://localhost:7034/api/inventario/gateways/${params.id}`)
          .then((response) => {             
             return response.json();                          
          })
          .then((result) => {
            setFormState(result)                        
          })
    },[])
  
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
            
        })
        console.log(formState)
    }
    const handleSumit = (e) => {
        e.preventDefault();
        console.log(formState);
        fetch(`https://localhost:7034/api/inventario/gateways/${params.id}`,
        {
            mode: 'cors',
            method: 'PUT',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        })          
    }

    return (
    <>
        <h1>useEffect</h1>
        <hr />
        <form onSubmit={handleSumit}>
            <div className="form-group">
                <input 
                type="text" 
                name="gatewayName"
                className="form-control" 
                placeholder="Tu nombre"
                autoComplete="off"
                value={gatewayName}
                onChange = {handleInputChange}
                />
            </div>
            <br />            
            <div className="form-group">
                <input 
                type="text" 
                name="ipV4"
                className="form-control" 
                placeholder="IPV4"
                autoComplete="off"
                value={ipV4}
                onChange = {handleInputChange}
                />
            </div>
            <br />
            <ul className='list-group'>
            {
                peripheralDevices.map(device => (
                    <li className="list-group-item" key={device.id}>
                        {device.vendor}                        
                    </li>
                    )
                )
            }
            </ul>
            <br />
            <button type="submit" className="btn btn-primary">
            Guardar
            </button>
        </form>        
    </>
  )
}

