import React, { useState }from 'react';
import TareaFormulario from './TareaFormulario';
import '../style-sheets/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else{
      alert('ESCRIBA ALGO');
    };
  }
    const eliminarTareas = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    };

    const completarTareas = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
  }

    return(
      <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
             <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTareas={completarTareas}
                eliminarTareas={eliminarTareas} />
            )
          };
        </div>
      </>
    );
}
export default ListaDeTareas;
