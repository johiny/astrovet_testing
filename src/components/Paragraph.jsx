import React from 'react'
const Paragraph = (props) => {
  if(props.hasOwnProperty('texto'))
  {
  return (
    <>
    <p>{props.texto}</p>
    <br></br>
    </>
  )
  }
  else{
    // quitar etiqueta p al haber refactorizado todo
    return(
      <>
      {props.children}
      <br></br>
      </>
    )
  }
}

export default Paragraph