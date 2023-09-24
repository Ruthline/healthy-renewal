import React from 'react'
import Header2 from './Header2';
import Footer from './Footer';
import Funcion_tooltip from './Funcion_tooltip';
import '../styles/Actualizar_ficha.css'


const Actualizar_ficha = () => {
  return (
    <div id='body'>
        <Header2/>

            <div id='cuadroExteriorActFicha'>
                <h1 id='tituloActFicha'>Ingresa los datos a actualizar en la Ficha Antropométrica</h1>
               
               {/*Este es el div que contiene los dos cuadros blancos de arriba*/}

                <div id='divGeneral'>

                    {/*Cuadro blanco de la izquierda*/}

                    <div id='cuadritoSupIzq' className='campoBlanco'>
                        <div id='izqSup'>
                            <div className='campito'>
                                <label id='lblIndiceMasa' htmlFor='txtIndiceMasa'> Índice de masa corporal</label>
                                <input type='text' id='txtIndiceMasa' name='indiceMasa'/>
                            </div>
                            <div className='campito'>
                                <label id='lblFrecuenciaCardiacaActiva' htmlFor='txtFrecuenciaCardiacaActiva'> Frecuencia cardiaca activa</label>
                                <input type='text' id='txtFrecuenciaCardiacaActiva' name='frecuenciaCardiacaActiva'/>
                            </div>
                        </div>
                        <div id='izqInf'>
                            <div className='campito'>
                                <label id='lblFuerzaEnBrazos' htmlFor='txtFuerzaEnBrazos'>Fuerza en brazos</label>
                                <input type='text' id='txtFuerzaEnBrazos' name='fuerzaEnBrazos'/>
                            </div>
                        </div>
                    </div>      
                
                    {/*Cuadro blanco de la derecha*/}

                    <div id='cuadritoSupDer' className='campoBlanco'>
                        <div id='der1'>                            
                            <label id="lblFrecuenciaPasiva" htmlFor='txtFrecuenciaPasiva'>Frecuencia cardiaca pasiva</label>
                            <input type="text" id="txtFrecuenciaPasiva" name="frecuenciaPasiva"/>
                            <label id="lblFuerzaPier" htmlFor='txtFuerzaPier'>Fuerza en Piernas</label>
                            <input type='text' id="txtFuerzaPier" name="fuerzaPiernas"/>
                        </div>
                        <div id='der2'>
                             <label id="lblPeso2" htmlFor='txtPeso2'>Peso (kilos)</label>
                             <input type="text" id="txtPeso2" name="peso"/>           
                             <label id="lblFuerzaAb2" htmlFor='txtFuerzaAb2'>Fuerza en abdomen</label>
                             <input type="text" id="txtFuerzaAb2" name="fuerzaAbdomen"/>
                        </div>
                    </div>                
                </div>

                {/*Cuadro blanco de abajo*/}

                <div id="divInf" className='cuadrito'>
                <div id='infSup2'>
                  <div className="campito">
                      <label id='lblFuerzaLumb2' htmlFor='txtFuerzaLumb2'>Fuerza lumbar</label>
                      <input type='text' id='txtFuerzaLumb2' name="fuerzaLumbar"/>
                  </div>
                  < div className="campito">
                      <label id='lblBurpeTest2' htmlFor='txtBurpeTest2'>Burpe Test</label>
                      <input type='text' id='txtBurpeTest2' name='burpeTest'/>                  
                  </div>
                </div>
                <div id='infDown2'>
                  <div className="campito">
                      <label id='lblCooperTest2' htmlFor='txtCooperTest2'>Cooper Test</label>
                      <input type='text' id='txtCooperTest2' name='cooperTest'/>
                  </div>
                  <div className="campito">
                       <div id='divFuncion'> <Funcion_tooltip/> </div>
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

             {/*Div de los botones*/}

             <div id="divBotonesNewFicha">
                  <input type='submit' id="btnCancelarNewFicha" value="Cancelar"/>
                  <input type='submit' id='btnAceptarNewFicha' value="Aceptar"/>
               </div>

            </div>
        <Footer/>       
    </div>
  )
}

export default Actualizar_ficha;