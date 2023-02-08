import React from 'react'
import ternera from "../media/images/redcalf.png"

const HomeIntro = () => {
  return (
    <div className='home_intro'>
        <div className='intro_title'>
            <h1>Análisis de Datos para el Campo</h1> 
            <h1>Una Introducción con herramientas aplicadas para entender el análisis de datos</h1>
        </div><br/> 
            <h2 className='intro_subtitle'>Bienvenidos a esta Introducción al análisis de datos para Medicos Veterinarios y Zootecnistas</h2>
         <div className='intro_card'>
          <p>Esta página ha sido creada pensando en los profesionales y estudiantes del sector pecuario que tienen la necesidad 
            de trabajar con datos. Existe hoy en día la necesidad de entender los datos que se generan al interior y al exterior
            de la empresa pecuaria e ir un poco mas allá en la integración e interpretación de los mismos para convertirlos en información
            valiosa. Es por ello, que si usted es un profesional Medico Veterinario, Zootecnista, estudiante o alguien
            interesado en el sector pecuario, que aqui va a encontrar algunas bases fundamentales sobre el análisis de los
            datos que se recojen en el diario vivir de nuestras empresas y muchos ejemplos aplicados que le permitiran
            entender su utilidad y aplicabilidad. A la vez espero que pueda implementarlos en su proceso de toma de
            decisiones.</p>
            <img src={ternera}/>
         </div>

         
    </div>
  )
}

export default HomeIntro