import '../header/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../header/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
function Header() {
    return(
        <header>
             <div className="header-index">
                    
                    <div className="nav-group">
                        
                        <Link to="/hr-home" className="one-nav"><img src={Logo} alt=""></img></Link>
    
                        
                        
                        <label for="clic-menu" className="three-nav" href="meni" ><FontAwesomeIcon icon={faBars}/></label>
                        <input type="checkbox" id="clic-menu"></input>
                        
    
                        
                        <div className="items" >
                            
                            <div className='seven-nav item search-home'>
                                <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
                        
                        
                            <Link to="/"  className="five-nav item">¿Qué es una ficha antropométrica?</Link>
                            <Link to="/" className="six-nav item">Información planes</Link>
                            <Link to="/hr-home" className="four-nav item" >Healthy Renewal</Link>
                        
                            <div className='seven-nav item search-home search-hidden'>
                                    <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                    <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
    
                        </div>
                    </div>

                    <div className='buttons-tablet'>
                        <div className='styleButtonTablet'>
                            <Link to="/" className='sign In'>Iniciar Sesión</Link>
                            <Link to="/" className='sign Up'>Registrarse</Link>
                        </div>
                        
                    </div>
                </div>

                <div className='buttons-mobile'>
                   <Link to="/" className='sign In'>Iniciar Sesión</Link>
                    <Link to="/" className='sign Up'>Registrarse</Link>
                </div>


                <div className="items-tablet" >
                            <div className=' item search-home'>
                                <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
                        
                        
                            <Link to="/"  className=" item">¿Qué es una ficha antropométrica?</Link>
                            <Link to="/" className=" item">Información planes</Link>
                            <Link to="/hr-home" className=" item" >Healthy Renewal</Link>
                        
                            <div className='item search-home search-hidden'>
                                    <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                    <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
    
                       
                        
                        
                        </div>
        </header>
        
    );

}
export default Header;