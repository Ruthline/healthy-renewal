import React from 'react'
import Header2 from '../../components/header2/Header2';
import Footer from '../../components/footer/Footer';
import '../actualizarDatos/Actualizar_datos.css';

const ActualizarDatos = () => {
  return (
    <div id="body">
        <Header2/>
        <section id='section'>
          <h1 id="tituloActualizarDatos">Actualizar Datos</h1>

          <div className="contenedorDatos">
            <div className="campoDatos">
              <label id="lblNombresDatos" htmlFor="txtnombreDatos">Nombres</label>
              <input type="text" id="txtnombreDatos" name="nombre" />
            </div>
            <div className="campoDatos">
              <label id="lblApellidosDatos" htmlFor="txtapellidosDatos">Apellidos</label>
              <input type="text" id="txtapellidosDatos" name="apellidos" />
            </div>
            <div className="campoDatos">
              <label id="lblCorreoDatos" htmlFor="txtCorreoDatos">Correo</label>
              <input type="text" id="txtCorreoDatos" name="correo" />
            </div>
            <div className="campoDatos">
              <label id="lblCorreo2Datos" htmlFor="txtcorreo2Datos">Confirmación Correo</label>
              <input type="text" id="txtcorreo2Datos" name="correo2" />
            </div>
            <div className="campoDatos">
              <label id="lblContrasenaDatos" htmlFor="txtcontrasenaDatos">Contraseña</label>
              <input type="password" id="txtcontrasenaDatos" name="contrasena" />
            </div>
            <div className="campoDatos">
              <label id="lblContrasena2Datos" htmlFor="txtcontrasena2Datos">Confirmación contraseña</label>
              <input type="password" id="txtcontrasena2Datos" name="contrasena2" />
            </div>
            <div className="campoDatos">
              <label className="label-file-upload" id="lblFotoPerfilDatos" htmlFor="txtFotoDatos">Foto de Perfil</label>
              <input type="file" id="txtFotoDatos" name="foto" accept="image/*" />
            </div>
            <div className="campoDatos">
              <label id="lblPaisDatos" htmlFor="txtPaisDatos">País</label>
              <input type="text" id="txtPaisDatos" name="busquedaPais" />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div id="divBotonesDatos">
            <input id="btnCancelarDatos" type="submit" value="Cancelar" />
            <input id="btnAceptarDatos" type="submit" value="Aceptar" />
            <input id="btnEliminarDatos"
                    type="submit" 
                    value="Eliminar"
                    onClick/>
          </div>
      </section>
        <Footer/>
    </div>
  )
}

export default ActualizarDatos;