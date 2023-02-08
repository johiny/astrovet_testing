import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
const BackButton = () => {
  return (
    <div className='back_button'>
       <a href = "#tabla">
    <div className='btn btn-primary'> 
        <span>Volver a los contenidos</span> <i className="fa-solid fa-hand-point-up"></i>
    </div>
    </a>
    </div>
  )
}

export default BackButton