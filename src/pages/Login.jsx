import FormLogin from '../components/FormLogin'

//Vista de la página de acceso

const Login = ({setToken}) => {

  const copyLeft = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="deeppink"/><path fill="white" d="M19.3 28.1c.3 1.3.2 4.1 4.6 4.1c.9 0 4.8.2 4.7-7.2v-1.6c0-6.7-3.2-7.2-4.8-7.2c-2.3 0-4.2.6-4.5 4.3h-4.8c.1-1.2.8-8.2 9.3-8.2c4.2 0 9.7 2.5 9.7 11.2V25c0 9.6-6.5 11.2-9.6 11.2c-3.7 0-8.7-1.6-9.3-8.1z"/></svg>

  return (
    <div className="grid justify-items-center pt-20 h-full">
      
      <FormLogin setToken={setToken}/>
      <footer className="text-pink-500 font-bold flex justify-center space-x-1">
         Caissateca <div className='mt-1.5 mx-0.5'>{copyLeft} </div> 2024
      </footer>

    </div>
  )
}

export default Login