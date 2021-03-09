export const revisarPresupuesto = (presupuesto, restante) => {

    let clase;

    if( ( presupuesto /4 ) > restante ) {
        clase = 'alert alert-danger'
    } else if ( (presupuesto / 2 ) > restante ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'aler alert-success';
    }

    return clase; 
}