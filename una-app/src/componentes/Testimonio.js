import React from 'react';
import '../style-sheets/Testimonio.css';

function Testimonio(props){
  
  return(

    <div className='contenedor-testimonio'>
      <img
       className='imagen-testimonio'
        src={ require(`../imagenes/${props.imagen}.png`) }
          alt='foto de Emma'/>
        <div className='contenedor-texto-testimonio'>
           <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
           <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
           <p className='texto-testimonio'>"{props.testimonio}"</p>
       </div>
    </div>
  );
}

export default Testimonio;
