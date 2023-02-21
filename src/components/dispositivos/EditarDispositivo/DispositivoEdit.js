import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DispositivoEdit = () => {
  
    const params = useParams();
    //console.log(params);


    const [formState, setFormState] = useState({
        vendor: '',
        status: '',  
        gatewayId: '',
        }
    );
    
    const { vendor, status, gatewayId } = formState;
    const [peticion, setPeticion] = useState([]);
    //const [device, setDevice] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7034/api/inventario/gateways/`)
          .then((response) => {             
             return response.json();                          
          })
          .then((peticion) => {
            setPeticion(peticion)
            console.log(peticion)
          })
          fetch(`https://localhost:7034/api/inventario/peripheral-device/${params.id}`)
          .then((response) => {             
             return response.json();                          
          })
          .then((result) => {
            setFormState(result)
            //console.log(result)
          })
      }, [])
  
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value                        
        })
        //console.log(target.name, target.value) 
        //console.log(formState)                   
    }


    const handleSumit = (e) => {
        e.preventDefault();
        console.log(formState);
        fetch(`https://localhost:7034/api/inventario/peripheral-device/${params.id}`,
        {           
            method: 'PUT',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        })          
    }

    return (
    <div className='row container'>
        <h1>useEffect</h1>
        <hr />
        
        <form onSubmit={handleSumit} >
            <div className="form-group">
                <input 
                type="text" 
                name="vendor"
                className="form-control" 
                placeholder="Tu nombre"
                autoComplete="off"
                value={vendor}
                onChange = {handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                type="text" 
                name="status"
                className="form-control" 
                placeholder="Status"
                autoComplete="off"
                value={status}
                onChange = {handleInputChange}
                />
            </div>

            <div>
            <select className="form-select" name='gatewayId' aria-label="Default select example" onChange={handleInputChange}>
                {
                    peticion.map(el => <option  value={el.id} key={el.id}> {el.gatewayName} </option>)
                }
            </select>
            </div>
            <button type="submit" className="btn btn-primary">
            Guardar
            </button>
        </form>        
    </div>
  )
}

