import React from 'react'
import { nanoid } from 'nanoid'
const ContentsTable = (props) => {
  return (
    <div id = "tabla" className="container bg-light">
        <section className="post">
            <div id="menu" className=" bg-light" style={{padding: "1.5vh"}}>
                <h2>Contenidos</h2>
                <ul>
                    {props.contenidos.map(contenido => {
                        return <li key={nanoid()}><a href={contenido.link.indexOf("#") === 0?contenido.link:`/${contenido.link}`}>{contenido.titulo}</a></li>
                    })}
                </ul>
            </div>
        </section>
    </div>
  )
}

export default ContentsTable