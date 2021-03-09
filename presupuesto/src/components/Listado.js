import React from 'react'
import Gasto from './Gastos'
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {

    return(


    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto 
            key={gasto.id}
            gasto={gasto}            
            />
        ))}

    </div>



    )};

    Listado.propTyes = {
        gastos: PropTypes.array.isRequired


    }

export default Listado;