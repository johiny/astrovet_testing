import React from 'react'

// este componente asi queda listo para modificar cada subtitulo con tailwind
// o si en algun futuro le queremos añadir cualquier cosa a todos los titulos
const SubTitle = (props) => {
  if(props.title)
  {
  return (
    <>
    <h2>{props.title}</h2>
    <br></br>
    </>
  )
  }
  else
  {
    return(
      <>
    <h4>{props.minititle}</h4>
    <br></br>
    </>
    )
  }
}

export default SubTitle