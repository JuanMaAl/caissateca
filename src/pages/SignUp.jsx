import { Link } from 'react-router-dom'
import FormSignUp from '../components/FormSignUp'


const SignUp = () => {

  return (
    <div>
      <h1>Caissateca (Desarollo)</h1>
      <FormSignUp />
      ¿Ya tienes una cuenta? <Link to='/'>Entrar</Link>
    </div>
  )
}

export default SignUp