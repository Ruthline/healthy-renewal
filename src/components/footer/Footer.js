import { Link } from 'react-router-dom';
import '../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Logo from '../footer/logo.png';

import Instagram from '../footer/insta.png';
import Facebook from '../footer/face.png';
import Twitter from '../footer/twit.png';
import Whatsapp from '../footer/whats.png';




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
        <h1 id="tituloSiguenos">Síguenos</h1>
                <div id="siguenosdiv">                   
                            <img className="imgredes" src={Instagram} title="@Healthy.Renewal" />                   
                            <img className="imgredes" src={Facebook} title="@Healthy.Renewal"/>                    
                            <img className="imgredes" src={Twitter} title="#HealthyRenewal"/>                    
                            <img className="imgredes" src={Whatsapp} title="HRWhatsapp"/>                    
                </div>
        </div>

    </div>
   ) 
}

export default Footer;