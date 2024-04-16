import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'


const Login = () => {

  return (
    <div>
      <h1>Caissateca (Desarollo)</h1>
      <FormLogin />
      ¿Aún no tienes una cuenta? <Link to='/SignUp'>Crear una Nueva Cuenta</Link>
    </div>
  )
}

export default Login