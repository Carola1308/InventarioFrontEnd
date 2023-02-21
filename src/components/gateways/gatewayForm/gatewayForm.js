import React, { useEffect, useState } from 'react';
import './effects.css';

export const GatewayForm = () => {
  
    const [formState, setFormState] = useState({
        gatewayName: '',
        ipV4: '',  
        peripheralDevices:[]      
        }
    );
    
    const { gatewayName, ipV4 } = formState;

    useEffect (() => {
        
    })
  
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
            
        })
    }
    const handleSumit = (e) => {
        e.preventDefault();
        console.log(formState);
        fetch('https://localhost:7034/api/inventario/gateways',
        {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        })          
    }

    return (
    <>
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
            <button type="submit" className="btn btn-primary">
            Guardar
            </button>
        </form>        
    </>
  )
}

