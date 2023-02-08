import React from 'react'
import { useState } from 'react'
import accordionarrow from "../media/images/accordion_arrow.svg"
import useCollapse from 'react-collapsed'
import { nanoid } from 'nanoid'
const ChapterAccordion = (props) => {
    
    const [arrowDown,setArrowDown] = useState(true)
    // hook para manejar el colapso de los sub capitulos
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: false})

  return (
    <div className='chapter_accordion'>
        <div className='chapter_accordion__title'>
        <a href={props.chapter.link}><h6 onClick={() => window.scrollTo(0, 0)}>{props.chapter.texto}</h6></a><img src={accordionarrow} className={arrowDown===true?"chapter_accordion__img":"chapter_accordion__img up"}
        {...getToggleProps({onClick: () => setArrowDown(!arrowDown)})}/>
        </div>

        {/* sub capitulos */}
        <ul className='chapter_accordion__subchapters' {...getCollapseProps()}>
        {props.subchapters.map(subchapter => {
            return (
                <li key={nanoid()}><a className='chapter_accordion__subchapters' href={`${props.chapter.link + subchapter.link}`}>{subchapter.texto}</a></li>
            )
        })}
        </ul>
    </div>
  )
}

export default ChapterAccordion