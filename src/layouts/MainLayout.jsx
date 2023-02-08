import "../styles/style.css"
import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Footer from '../components/Footer'

const MainLayout = (props) => {

  return (
    <div className='main_layout'>
        <BarraDeNavegacion/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default MainLayout