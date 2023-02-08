const ChapterCard = (props) => {
  
  return (
    <div className='chapter_card' onClick={() => window.location.href =`/${props.link}`}>
        <img src={props.imagen} className="chapter_card__image" alt={props.titulo}/>
        <div className='chapter_card__body'> 
            <h3>{props.titulo}</h3>
        </div>
    </div>
  )
}

export default ChapterCard