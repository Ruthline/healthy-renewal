import { Link } from 'react-router-dom';
import '../indexContain/IndexContain.css';


function IndexContain() {
    return(
        <div className='container-index'>
            <div className='invite-information'>
                <h2>
                Nos gusta que te sientas bien y hemos desarrollado una metodología de ayuda para que empieces un cambio saludable
                </h2>
                <p>Nuestros planes se basan de la extracción de tus datos con una ficha antropométrica, en donde te asignamos el plan de actividad física y el respectivo plan nutricional que te convenga. Permítenos ser parte de este cambio.</p>

                <div className='start-button-section'>
                    <a><Link to="/" className='start-button'>Empieza gratis</Link></a>
                </div>
            </div>
           
            <div className='image-index'></div>
            

        </div>
    )
}

export default IndexContain;