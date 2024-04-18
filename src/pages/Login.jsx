import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'


const Login = ({setToken}) => {

  return (
    <div>
      <h1>Caissateca (Desarollo)</h1>
      <FormLogin setToken={setToken}/>
      ¿Aún no tienes una cuenta? <Link to='/SignUp'>Crear una Nueva Cuenta</Link>
    </div>
  )
}

export default Login