import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
       <div className='freecodecamp-logo-contendor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
        alt='Logo de Freecodecamp' />
      </div>
      <div className='contenedor-principal'>
          <Contador numClicks={numClicks}
          />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={ manejarClick } />     
          <Boton 
             texto='Finalizar'
             esBotonDeClick={false}
             manejarClick={ reiniciarContador } />
       </div>
    </div>
  );
}

export default App;
