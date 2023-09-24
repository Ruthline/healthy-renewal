import React from 'react'
import Header2 from './Header2';
import Footer from './Footer';
import '../styles/Ficha_antropometrica.css'
import Foto from '../imagenes/Foto_perfil.png'

const Ficha_antropometrica = () => {
  return (
    <div id="body">
        <Header2/>

        {/*Div contenedor de todo*/}

        <div id="general1">
            <h1 id='tituloGeneral1'>Ficha Antropométrica</h1>

            {/*Div con toda la parte superior*/}
         <div id="sup">
                <div id='divFoto' >
                    {<img id='fotoPerfil' src={Foto} title='fotoPerfil' alt='fotoPerfil'/>}
                </div>
            
            {/*Div al lado de la foto, el cual se divide en 3*/}            
            <div id='supDerecha' className='diseño'>
                <div id='supIzq'>
                    <label id='lblMasa' htmlFor='txtMasa'>Índice masa corporal</label>
                    <input type='text' id='txtMasa' name='indiceMasa' readOnly/>
                    <label id='lblPeso3' htmlFor='txtPeso3'>Peso (kilos)</label>
                    <input type='text' id='txtPeso3' name='peso' readOnly/>
                </div>
                <div id='supMed'>
                    <label id='lblFCA' htmlFor='txtFCA'>Frecuencia cardiaca activa</label>
                    <input type='text' id='txtFCA' name='frecuenciaAactiva' readOnly/>
                    <label id='lblEnvergadura3' htmlFor='txtEnvergadura3'>Envergadura (metros)</label>
                    <input type='text' id='txtEnvergadura3' name='envergadura' readOnly/>
                </div>
                <div id='supDer'>
                    <label id='lblFCP' htmlFor='txtFCP'>Frecuencia cardiaca pasiva</label>
                    <input type='text' id='txtFCP' name='frecuenciaPasiva' readOnly/>
                    <label id='lblFuerBra' htmlFor='txtFuerBra'>Fuerza en brazos</label>
                    <input type='text' id='txtFuerBra' name='fuerzaBrazos' readOnly/>
                </div>
             </div>
         </div>

            {/*Div con la parte de abajo*/}   
         <div id='inferior' className='diseño'>
            <div id='inferiorIzq'>
                <label id='lblFuePie' htmlFor='txtFuePie'>Fuerza en piernas (centímetros)</label>
                <input type='text' id='txtFuePie' name='fuerzaPiernas' readOnly/>
                <label id='lblBurpeT' htmlFor='txtBurpeT'>Burpe Test</label>
                <input type='text' id='txtBurpeT' name='burpeTest'readOnly/>
            </div>
            <div id='inferiorMid1'>
                <label id='lblFueAb3' htmlFor='txtFueAb3'>Fuerza en abdomen </label>
                <input type='text' id='txtFueAb3' name='fuerzaAbdomen' readOnly/>
                <label id='lblCooperT' htmlFor='txtCooperT'>Cooper Test</label>
                <input type='text' id='txtCooperT' name='cooperTest'readOnly/>
            </div>
            <div id='inferiorMid2'>
                <label id='lblAlt' htmlFor='txtAlt'>Altura (metros) </label>
                <input type='text' id='txtAlt' name='altura' readOnly/>
                <label id='lblCalIde' htmlFor='txtCalIde'>Calorías ideales (día)</label>
                <input type='text' id='txtCalIde' name='caloriasIdeales'readOnly/>
            </div>
            <div id='inferiorDer'>
                <label id='lblFueLum' htmlFor='txtFueLum'>Fuerza lumbar </label>
                <input type='text' id='txtFueLum' name='altura' readOnly/>
                <label id='lblPeId' htmlFor='txtPeId'>Peso ideal (kilos)</label>
                <input type='text' id='txtPeId' name='pesoIdeal'readOnly/>
            </div>
          </div>
         <div id='divBoton'>
                <a href='#' className='botonActualizarFicha'>Actualizar Ficha</a>
         </div>
        </div>
       <Footer/>
    </div>
  )
}

export default Ficha_antropometrica;
