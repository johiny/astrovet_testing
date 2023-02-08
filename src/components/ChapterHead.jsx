import React from 'react'
import { isOutsideVh } from '../Hooks_and_Functions/jFunctions'
import { useScrollPosition } from '../Hooks_and_Functions/jHooks'
import { useEffect } from 'react'
const ChapterHead = (props) => {

  return (
    <div id='chapterHeader' className="ChapterHead" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
      <h1 style={{color: "yellow"}}>{props.titulo}</h1>
      </div>
    </div>
  )
}

export default ChapterHead