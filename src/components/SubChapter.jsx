import React from 'react'
import BackButton from './BackButton'
const SubChapter = (props) => {
  return (
    <section id={props.id}>
    <div className="container bg-light">
        {props.children}
        <BackButton/>
    </div>
    </section>
  )
}

export default SubChapter