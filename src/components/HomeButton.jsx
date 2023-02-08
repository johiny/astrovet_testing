import { HashLink } from '@xzar90/react-router-hash-link'
const HomeButton = (props) => {
  return (
    <a href={`#${props.link}`}><button className={`home_button`}>{props.texto}</button></a>
  )
}

export default HomeButton