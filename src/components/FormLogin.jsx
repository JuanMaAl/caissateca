import React from 'react'
import BasicButton from './BasicButton'
import { useState } from 'react'
import { supabase } from '../client'
import BasicInput from './BasicInput'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const FormLogin = ({setToken}) => { 

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '', password: ''
  })

  function handleChange(event){
    setFormData((prevFormData)=>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  console.log(formData)

      async function handleSubmit(e){
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
              email: formData.email,
              password: formData.password,
            })
          if (error) throw (error)
          console.log(data)
          setToken(data)
          navigate('/homepage')

        }catch (error) {
            alert(error)
         }}
          
      return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-orange-200 to-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div className="grid justify-items-center space-y-3">
    <h1 className="text-4xl font-bold">Caissateca</h1>
    <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
    <br />
    <BasicInput placeholder={"Contraseña"} name={"password"} type={"password"} onChange={handleChange} />
    <br />
    <div className="grid justify-items-center">
      <BasicButton type={"Submit"} text={"Entrar"}
      className={"bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 content-center"}
      />
    </div>
    <br />
    <p>
      ¿No tienes una cuenta? <Link to='/SignUp'
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Nueva Cuenta
      </Link>
    </p>
    </div>
  </form>
  )
}


export default FormLogin