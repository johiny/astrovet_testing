import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
const Video = (props) => {
  return (
    <div className='videoPlayer'>
        <LiteYouTubeEmbed
            id={props.id}
            title={props.title}
            poster="maxresdefault"/>
    </div>
  )
}

export default Video