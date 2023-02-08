import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div>
        <footer className="footer bg-dark">
          <div className='footer__social_icons_container'>
            
          <a target="_blank" href="https://www.youtube.com/channel/UCcVhlN8B5LDXCg5chyqePtg" ><i className="fa-brands fa-youtube social_icon"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/hector-delgado-9860b1246/" ><i className="fa-brands fa-linkedin social_icon"></i></a>
          <a target="_blank" href="mailto:hdelgado@vetanalisisdatos.com" ><i className="fa-solid fa-envelope social_icon"></i></a>
          </div>
          <p> Introducción al Análisis de Datos para MVZ </p>
          </footer>
    </div>
  )
}

export default Footer