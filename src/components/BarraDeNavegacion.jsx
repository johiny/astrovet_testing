import { useState } from 'react';
const BarraDeNavegacion = () => {

  // manejo de navbar por contexto compartido con el header de la web
  const [navClass, setNavClass] = useState("navbar")

  return (
    <div id="navbar" className={navClass}>
        <div className= "logo">
        <span className="text-primary"><i className="fa-solid fa-book-open fontawe-icon"></i>Introducción al Análisis de Datos para MVZ</span>
        </div>
        <div className='navbar_container'>
          <ul className='navbar_links'>
            <li><a href='/'>Bienvenidos</a></li>
            <li><a href='/blog'>Acerca de</a></li>
            <li><a href='/contenidos'>Contenidos</a></li>
            <li><a href='/referencias'>Referencias</a></li>
            <li><a href="/#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
  )
}

export default BarraDeNavegacion;