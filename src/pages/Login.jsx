import FormLogin from '../components/FormLogin'


const Login = ({setToken}) => {

  return (
    <div className="grid justify-items-center pt-20">
      
      <FormLogin setToken={setToken}/>

    </div>
  )
}

export default Login