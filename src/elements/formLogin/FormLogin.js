import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d",
	verdeOscuro: "#022B3A",
	verceClaro:"rgb(146,204,2)",
	amarillo:"rgb(255,185,0)",
	azulOscuro:"rgb(38,39,59)",
	purple:"rgb(69,45,128)",
}


const Formulario = styled.form `
	background-color: #FFFFFF;
	border: 0.5px solid #E1E5F2;
	border-radius: 10px;
	box-shadow:3px 0px 30px rgba(163,163,163, 0.4);
	margin:2rem auto;
    padding:2rem 3rem;
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const Label = styled.label`
	display: block;
	font-weight: bolder;
	
	padding: 10px 0px;
	min-height: 40px;
	cursor: pointer;
	color:#022B3A;
	text-shadow: 0.8px 0.5px 1px var(--dark-green);
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background-color:#E1E5F2;
	border-radius: 10px;
	height: 45px;
	margin-bottom:1rem;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 30px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;
	margin-top:1rem;
	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width:100px;
	margin-top:2rem;
	background: white;
	color: #022B3A;
	font-weight: bold;
	border: 1px solid #E1E5F2;
	box-shadow:3px 0px 30px rgba(163,163,163, 0.4);
	border-radius: 20px;
	cursor: pointer;
	transition: .1s ease all;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
        background:#022B3A;
        color:white;
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};