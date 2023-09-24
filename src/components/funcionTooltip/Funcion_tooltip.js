import React,{useState} from 'react'
import '../../pages/nuevaFicha/Nueva_Ficha.css';
import {FaQuestionCircle} from 'react-icons/fa';


const Funcion_tooltip = () => {
    const [mostrarGlobo, setMostrarGlobo] = useState(false);
    const explicacionActividadFisica = " Se refiere a la cantidad de ejercicio que haces en tu día a día, si no haces ejercicio por favor selecciona sedentario.";

    const mostrarExplicacion = () => {
      setMostrarGlobo(true);
    };

    const ocultarExplicacion = () => {
      setMostrarGlobo(false);
    }

    return (
        <div id="campoActFisica">
        <label id='lblActFisica' htmlFor='listaActFisica'>Actividad Física</label>
        <span className='iconoInfo' onMouseEnter={mostrarExplicacion} onMouseLeave={ocultarExplicacion}>
          <FaQuestionCircle />
        </span>
  
          {mostrarGlobo &&(
             <span id="globoTexto" className='globoTexto'>{explicacionActividadFisica}</span>
           )}
      </div>
  )
}

export default Funcion_tooltip;
