import { Link } from 'react-router-dom';
import '../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Logo from '../footer/logo.png';

function Footer() {
   return(
    <div className='container-footer'>
        <div className='company-section-footer'>
          
            <Link to="/hr-home" className="footer-logo"><img src={Logo} alt=""></img></Link>
    
            <div className='list-company-footer'>
                <a href='mailto:correo@correo.com'><i><FontAwesomeIcon icon={faEnvelope}/> </i>correo@correo.com</a>
                <p>601-1234567</p>
                <p>Elaborado 2023 ©</p>
            </div>
        </div>
        <div className='information-footer'>
                <h2>Información</h2>
            <ul className='list-information-footer'>
                <li><a href=''>Nosotros</a></li>
                <li><a href=''>Contáctanos</a></li>
                <li><a href=''>Terminos y condiciones</a></li>
                <li><a href=''>Soporte</a></li>
            </ul>
            
        </div>
        <div className='social-networking-footer'>
            <h2>Síguenos</h2>
            <div className='list-social-networking'>
                <a href=''><i><FontAwesomeIcon icon={faInstagram}/></i></a>
                <a href=''><i className='facebook-icon'><FontAwesomeIcon icon={faFacebook}/></i> </a>
                <a href=''><i className='yt-icon'><FontAwesomeIcon icon={faYoutube}/></i> </a>
                <a href=''><i><FontAwesomeIcon icon={faWhatsapp}/></i> </a>
            </div>
        </div>

    </div>
   ) 
}

export default Footer;