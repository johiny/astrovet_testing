import React from 'react'
const ReferencesBlock = (props) => {
  return (
    <div className="container bg-light">
        <h2>Referencias</h2>
        <ul className='referencelist'>
        {props.children}
        </ul>
    </div>
  )
}

export default ReferencesBlock