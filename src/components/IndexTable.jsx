import React from 'react'
import { nanoid } from 'nanoid'
const IndexTable = (props) => {
  return (
    <section id={props.chapter_id} className="container bg-light">
        <a href={`/${props.chapter_id}`}><h1>{props.chapter_title}</h1></a>
        <ul>
            {props.contenidos.map(contenido => {
                return <li key={nanoid()}><a href={contenido.link.indexOf("#") === 0?contenido.link:`/${contenido.link}`}>{contenido.titulo}</a></li>
            })}
        </ul>
    </section>
  )
}

export default IndexTable