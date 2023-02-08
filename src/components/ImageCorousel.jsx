import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { nanoid } from 'nanoid'
const ImageCorousel = (props) => {
  return (
    <div className='Image_Carousel' style={{width:props.width || "60%",maxWidth:props.max_zoom || "80%"}}>
    <Carousel autoPlay={true} infiniteLoop={true}>
        {props.images.map(image =>{
            return(
        <div key={nanoid()}>
            <img src={image.image}/>
            <p className="legend">{image.texto}</p>
        </div>
            )
        })}
    </Carousel>
    </div>
  )
}

export default ImageCorousel