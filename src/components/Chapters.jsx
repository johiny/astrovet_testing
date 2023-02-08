import ChapterCard from '../components/ChapterCard'
import data from "../media/images/data1.png"
import dataprocess from "../media/images/data2.png"
import probability from "../media/images/probability.png"
import analisisgrafica from "../media/images/analisisgrafica.png"
import datatools from "../media/images/datatools.png"
import datatools2 from "../media/images/datatools2.png"
import anava from "../media/images/anava.png"
const Chapters = () => {
  return (
    <div className='chapters'>
        <ChapterCard imagen={data} link = "post" titulo="1- Introducción al análisis de los datos"/>
        <ChapterCard imagen={dataprocess} link = "examples" titulo="2- Cuáles son los datos estructurados y como se deben alistar para su procesamiento"/>
        <ChapterCard imagen={probability} link = "probabilidades" titulo="3- Que son las 
        probabilidades y cómo nos pueden ayudar a tomar decisiones"/>
        <ChapterCard imagen={analisisgrafica} link ="distribuciones" titulo="4- Como se distribuyen los datos y que análisis hacer de acuerdo a esto"/>
        <ChapterCard imagen={datatools} link = "analisis" titulo="5- Herramientas de analisis inicial de los datos y estadística descriptiva"/>
        <ChapterCard imagen={datatools2}  link ="analisis2"titulo="6- Que herramientas podemos utilizar para comprobar la hipótesis?
        Cómo se interpretan los resultados?"/>
        <ChapterCard imagen={anava}  link ="anava"titulo="7- El Análisis de Varianza (ANAVA) y su aplicabilidad"/>
    </div>
  )
}

export default Chapters