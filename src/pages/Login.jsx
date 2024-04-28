import FormLogin from '../components/FormLogin'

//Vista de la página de acceso

const Login = ({setToken}) => {

  return (
    <div className="grid justify-items-center pt-20 h-full">
      
      <FormLogin setToken={setToken}/>

    </div>
  )
}

export default Login