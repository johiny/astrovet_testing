import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser"
import { useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import ContactLoader from '../components/ContactLoader'
import { ToastContainer, toast, Flip } from 'react-toastify';
const Form = (props) => {

  // manejo del formulario y uso de emailjs
  const form = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    // se envia todo lo que necesita el servicio de emailjs incluyendo la key que devuelve la recptcha
    emailjs.sendForm(import.meta.env.REACT_APP_EMAILJS_SERVICE_ID, "contact_form", form.current, import.meta.REACT_APP_EMAILJS_PUBLICKEY)
    .then((result) => {
      setLoading(false)
      toast.success('Mensaje enviado', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    }, (error) => {
      setLoading(false)
      console.log(error)
      toast.error('El mensaje no se pudo enviar', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    });
  }
  // Estados formulario
  const [Loading,setLoading] = useState(false);
  const [submitButton,setSubmitButton] = useState(false);
  // const captcha = useRef()
  // manejo del captcha
  const captchaChange = () => {
    setSubmitButton(!submitButton)
  }


  return (
    
    <div className="contact flex-columns">
      <div className="form_card column-2">
        <h2>Si desea ponerse en contacto</h2>
        <form onSubmit={sendEmail} ref={form} className="callback-form">
          <div className="form-control">
            <label htmlFor="user_name"></label>
            <input type="text" name="user_name" id="name" required
            placeholder="Su nombre" />
          </div>
          <div className="form-control">
            <label htmlFor="user_email"></label>
            <input type="email" name="user_email" id="email" required
            placeholder="Su correo electronico" />
          </div>
          <div className="form-control">
            <label htmlFor="comment"></label>
            <textarea name="message" id="comment" required rows="4" cols="39" placeholder='Escriba su comentario'>
            </textarea>
          </div>
          {/* captcha de google que cambia de valor cuando es resolvida y ese valor se guarda en los valores del formulario */}
          <ReCAPTCHA
            sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={captchaChange}/>
          {submitButton === true?<input type="submit" value="Enviar" id= "submit"
          className="btn"/>:null}
        </form>
      {Loading ? <ContactLoader/> : null}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Flip}
      />
    </div>
  )
}

export default Form