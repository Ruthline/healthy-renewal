import React from 'react'
import Header2 from './Header2';
import Footer from './Footer';
import '../styles/Body.css'
import '../styles/Nueva_ficha.css'
import Funcion_tooltip from './Funcion_tooltip';


const Nueva_ficha = () => {
    
  return (
    <div id="body">
        <Header2/>
               
        <div id="contenedorNuevaFicha">           
              <h1 id='tituloNuevaFicha'>Nueva Ficha Antropométrica</h1>  

            {/*Este div contiene los dos cuadros blancos de arriba*/}

           <div className="divInternoNuevaFicha">       
            
            {/*Este es el cuadro blanco de la izquierda*/}

            <div id="divIzq" className='cuadrito'>
              <div id="contIzq">
                <label id="lblIndice" htmlFor='txtIndice'>Índice de masa corporal</label>
                <input type="text" id="txtIndice" name="indice"/>
                <label id="lblEnvergadura" htmlFor='txtEnvergadura'>Envergadura (metros)</label>
                <input type="text" id="txtEnvergadura" name="envergadura"/>
              </div>
              <div id='contIzq2'>
                <label id="lblFrecuenciaAct" htmlFor='txtFrecuenciaAct'>Frecuencia cardiaca activa</label>
                <input type="text" id="txtFrecuenciaAct" name="frecuenciaAct"/>
                <label id="lblFuerzaBra" htmlFor='txtFuerzaBra'>Fuerza en brazos</label>
                <input type="text" id="txtFuerzaBra" name="fuerzaBra"/>
              </div>
            </div>

            {/*Este es el cuadro blanco de la derecha*/}

            <div id="divDer" className='cuadrito'>
              <div id='contDer'>
                      <label id="lblFrecuenciaPas" htmlFor='txtFrecuenciaPas'>Frecuencia cardiaca pasiva</label>
                      <input type="text" id="txtFrecuenciaPas" name="frecuenciaPas"/>
                      <label id="lblFuerzaPiernas" htmlFor='txtFuerzaPiernas'>Fuerza en Piernas</label>
                      <input type='text' id="txtFuerzaPiernas" name="fuerzaPiernas"/>
              </div>
              <div id='contDer2'>
                      <label id="lblPeso" htmlFor='txtPeso'>Peso (kilos)</label>
                       <input type="text" id="txtPeso" name="peso"/>           
                      <label id="lblFuerzaAb" htmlFor='txtFuerzaAb'>Fuerza en abdomen</label>
                      <input type="text" id="txtFuerzaAb" name="fuerzaAbdomen"/>
                </div>
              </div>
          </div>

            {/*Este es el cuadro blanco de abajo*/}

            <div id="divInf" className='cuadrito'>
                <div id='infSup'>
                  <div className="campoInf">
                      <label id='lblAltura' htmlFor='txtAltura'>Altura (metros)</label>
                      <input type='text' id='txtAltura' name='altura'/>
                  </div>
                  <div className="campoInf">
                      <label id='lblFuerzaLumb' htmlFor='txtFuerzaLumb'>Fuerza lumbar</label>
                      <input type='text' id='txtFuerzaLumb' name="fuerzaLumbar"/>
                  </div>
                  < div className="campoInf">
                      <label id='lblBurpeTest' htmlFor='txtBurpeTest'>Burpe Test</label>
                      <input type='text' id='txtBurpeTest' name='burpeTest'/>                  
                  </div>
                </div>
                <div id='infDown'>
                  <div className="campoInf">
                      <label id='lblCooperTest' htmlFor='txtCooperTest'>Cooper Test</label>
                      <input type='text' id='txtCooperTest' name='cooperTest'/>
                  </div>
                  <div className="campoInf">
                        <Funcion_tooltip/>

                     <div id='campoListaAct'>
                      <select id='listaActFisica' name="actFisica">
                        <option value="seleccionaUnaOpcion">Selecciona una opción</option>
                        <option value={1.2}>Sedentario</option>
                        <option value={1.375}>Una vez por semana</option>
                        <option value={1.55}> 3 a 4 veces por semana</option>
                        <option value={1.725}> 5 veces por semana</option>
                        <option value={1.90}> Alto rendimiento</option>
                      </select>
                    </div>
                  </div>
                </div>
             </div> 

              {/*Este es el div de los botones*/}

               <div id="divBotonesNewFicha">
                  <input type='submit' id="btnCancelarNewFicha" value="Cancelar"/>
                  <input type='submit' id='btnAceptarNewFicha' value="Aceptar"/>
               </div>

             </div>
        <Footer/>
  </div>
  )
}

export default Nueva_ficha;
