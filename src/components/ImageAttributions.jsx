import React from 'react'
import { nanoid } from 'nanoid'
const ImageAttributions = (props) => {
  return (
    <div className="container bg-light">
        <h2>Atribuciones de Media</h2>
        <ul>
        {props.attributions.map(atribution => {
            return(
                <li key={nanoid()}>* <u><a href={atribution.url}>{atribution.nombre}</a></u></li>
            )
        })}
        </ul>
    </div>
  )
}

export default ImageAttributions