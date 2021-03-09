import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError ] = useState(false);


// cuando el usuario agregar un gasto
const agregarGastos = e => {
    e.preventDefault();


    //validar
    if (cantidad <1 || isNaN(cantidad) || nombre.trim() === '') {
        guardarError(true);
        return;
    }

    guardarError(false);


    //consturir el gasto
    const gasto = {
        nombre, 
        cantidad,
        id: shortid.generate()
    }

        

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
   
    
    //resetear el form
    guardarNombre('');
    guardarCantidad(0);


}

    return(

        <form
            onSubmit={agregarGastos}
        >

            <h2> Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad de Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1000"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <div className="campo">
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
                    />
            </div>





            </form>

    )
};

Formulario.propTypes = {
        
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired


}


export default Formulario;