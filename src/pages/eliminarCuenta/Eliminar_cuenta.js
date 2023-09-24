import React from 'react'
import Header2 from '../../../../../Downloads/Healthy_renewal-master/Healthy_renewal-master/healthy_renewal/src/components/Header2'
import Footer from '../../../../../Downloads/Healthy_renewal-master/Healthy_renewal-master/healthy_renewal/src/components/Footer'
import '../styles/Body.css'
import '../styles/Eliminar_cuenta.css'

const Eliminar_cuenta = ({onCancelarClick}) => {
  return (
    <div id="body">
        <Header2/>
        <section id='section'>
        <div className="contenedorExterior">
        <div className="contenedorInterno">
        <h1 id="tituloEliminarCuenta">¿Estás seguro que deseas eliminar tu cuenta?</h1>
        <div className="campoElim">
            <h3><label id="lblcontrasenaElim" htmlFor="txtContrasenaElim">Contraseña</label></h3>
            <input type="password" id="txtContrasenaElim" name="contrasena"/>
            <h3><label id="lblcontrasena2Elim" htmlFor="txtcontrasena2elim" >Confirmación contraseña</label></h3>
            <input type="password" id="txtcontrasena2elim" name="contrasena2"/>            
        </div>
        <div id="divBotonesElim">
                 <input type="submit" id="btnAcept" value="Aceptar"/>
                 <input type="submit"
                         id="btnCancel" 
                         value="Cancelar"
                         onClick={onCancelarClick}/>
        </div>
        </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Eliminar_cuenta;
