import React from 'react';
import '../style-sheets/Tarea.css';
import { AiOutlineClose } from 'react-icons/ai';

function Tarea( { id, texto, completada, completarTareas, eliminarTareas } ) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
        onClick={() => completarTareas(id)}>
        {texto}
    </div>
    <div className='tarea-contenedor-iconos'
      onClick={() => eliminarTareas(id)}>
      <AiOutlineClose className='tarea-icono' />
      </div>
    </div>
    );
}
export default Tarea;
