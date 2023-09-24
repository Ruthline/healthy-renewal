import React, {useState} from 'react';
import {Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/formLogin/FormLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';
import LoginImg from '../../pages/signin/login.png'
import Select from 'react-select';



const SignIn =()=>{
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [fecha, cambiarFecha] = useState ({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 
	

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		fecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,  // Expresión regular para validar fechas en formato dd/mm/aaaa
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const DBGender = [
		{ id: 123, name: 'Femenino'},
		{ id: 124, name: 'Masculino'}
	]


	
const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}


const history=useNavigate();    
const [data,setData]=useState({id:"",nombre:"" ,apellido: "", fecha:"" ,correo:"",telefono:""}); 

const handleChange=({target})=>{

	setData({
        ...data,
        [target.name]:target.value
    })
}

const handleSelectChange = ( event ) => {
	console.log(event);
}
const url="http://localhost:2000/notificaciones"; 

const handleSubmit=async(e)=>{
	e.preventDefault();
	const response=await axios.post(url,data);//await espera hasta que se ejcute la petición
	//console.log(response);
	if (response.status === 201) {
		
		Swal.fire(
			'Proximamente!',
			`Gracias <strong> ${response.data.nombre} ${response.data.correo}</strong> recibiras muy pronto las notificaciones`,
			'success'
		)
		history.push('/');
		
	}else {
		Swal.fire(
			'Error!',
			'Hubo un problema al registrarse',
			'error'
		)
	}


	if(
		nombre.valido === 'true' &&
		apellido.valido === 'true' &&
		fecha.valido === 'true' &&
		correo.valido === 'true' &&
		password.valido === 'true' &&
		terminos
	){
		cambiarFormularioValido(true);
		cambiarNombre({campo: '', valido: null});
		cambiarApellido({campo: '', valido: null});
		cambiarFecha({campo: '', valido: null});
		cambiarCorreo({campo: '', valido: null});
		cambiarPassword({campo: '', valido: null});

		// ... 
	} else {
		cambiarFormularioValido(false);
	}
}


  return ( 
    <main>
        <Header/>
        <div>
			
            <Formulario action="" onSubmit={handleSubmit}>
                <div className='login-up'>
			        <h1 className='t-form'>Registrarse</h1>
                    <img src={LoginImg} alt=""></img>
                </div>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombre"
					placeholder="Pepito"
					name="nombre"
					value={data.nombre}
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
					onChange={handleChange}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					type="text"
					label="Apellido"
					placeholder="Gonzales"
					name="apellido"
					value={data.apellido}
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
					onChange={handleChange}
				/>
				<Input
					estado={fecha}
					cambiarEstado={cambiarFecha}
					type="date"
					label="Fecha de Nacimiento"
					placeholder="fecha"
					name="fecha"
					value={data.fecha}
					leyendaError="Debe asignar la fecha de nacimiento"
					expresionRegular={expresiones.fecha}
					onChange={handleChange}
				/>

				<div className = " Suppliers-container ">
						<Select
						// defaultValue = { suppliers[0] }
						options = { DBGender.map(sup => ({ label: sup.name, value: sup.id })) }
						onChange = { handleSelectChange }
						/>
					</div>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					type="email"
					label="Correo Electrónico"
					placeholder="pepito@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					value={data.correo}
					onChange={handleChange}
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					value={data.password}
					onChange={handleChange}
					type="password"
					label="Contraseña"
					placeholder=""
					name="telefono"
					leyendaError="La contraseña debe tener de 4 a 12 dígitos"
					expresionRegular={expresiones.password}
				/>


           

      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
      {formularioValido===false && <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
		{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>
      </div>

      <Footer/>
    </main>
    
    );
}



export default SignIn;