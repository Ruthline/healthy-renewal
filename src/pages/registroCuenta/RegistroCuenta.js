import React from 'react'
import '../registroCuenta/Registro_cuenta.css';
import Header2 from '../../components/header2/Header2';
import Footer from '../../components/footer/Footer';
import '../../index.css';

function RegistroCuenta (){
  return (
    <div id="body">
      <Header2/>
      <section id='section-registro'>
        <h1 id="tituloRegistro">Registro</h1>
        <form>
          <div className="contenedorCuenta">
            <div className="campoCuenta">
              <label id="lblNombreCuenta" htmlFor='txtnombreCuenta'>Nombres</label>
              <input type="text" id="txtnombreCuenta" name="nombre" />
            </div>
            <div className="campoCuenta">
              <label id="lblApellidosCuenta" htmlFor='txtapellidosCuenta'>Apellidos</label>
              <input type="text" id="txtapellidosCuenta" name="apellidos" />
            </div>
            <div className="campoCuenta">                    
                    <label id="lblFechaNacCuenta" htmlFor='txtfechanacCuenta'>Fecha de nacimiento</label>
                    <input type="date" id="txtfechanacCuenta" name="fechanac" />
                </div>
                <div className="campoCuenta">                   
                    <label id="lblCorreoCuenta" htmlFor='txtcorreoCuenta'>Correo</label>
                    <input type="text" id="txtcorreoCuenta" name="correo"/>
                </div>
                <div className="campoCuenta">                   
                    <label id="lblContrasenaCuenta" htmlFor='txtcontrasenaCuenta'>Contraseña</label>
                    <input type="password" id="txtcontrasenaCuenta" name="contrasena"/>
                </div>
                <div className="campoCuenta">                    
                    <label id="lblContrasena2Cuenta" htmlFor='txtcontrasena2Cuenta'>Confirmación contraseña</label>
                    <input type="password" id="txtcontrasena2Cuenta" name="contrasena2"/>
                </div>
            <div className="campoCuenta">
              <label id="lblGeneroCuenta" htmlFor='listaGeneroCuenta'>¿Cuál es tu sexo biológico?</label>
              <select id="listaGeneroCuenta" name="genero">
                <option value="selecciona una opcion">Selecciona una opción</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </select>
            </div>
            <div className="campoCuenta">
              <label id="lblPaisCuenta" htmlFor='txtPaisCuenta'>País</label>
              <input type="text" id="txtPaisCuenta" name="busquedaPais" />
            </div>
          </div>
          <br />
          <div className='ultRegistro'>
                <label id="lblTerminosCuenta">
                  <input type="checkbox" id="cbAceptoTerminosCuenta" name="aceptoTerminos" />
                  Aceptar términos y condiciones
                </label>
                <br />
                <br />
                <input id="btnAceptarCuenta" 
                      type="submit" 
                      value="Aceptar" 
                      onClick/>
            </div>
        </form>
      </section>
      <br />
      <br />
      <Footer/>
    </div>
  );
};


export default RegistroCuenta;
