import React, { useState }from 'react';
import '../style-sheets/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setTinput] = useState('');

  const manejarCambio = e =>{
      setTinput(e.target.value);
    };

  const manejarEnvio = e =>{
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    props.onSubmit(tareaNueva);
  }

  return (
    <form className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input
      className='tarea-input'
      type='text'
      placeholder='Escriba una tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;