import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import BasicButton from './BasicButton'
import BasicInput from './BasicInput'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

// Incluye el formulario de registro y las funciones necesarias para enviar
// los datos de registro a la BBDD (supabase)

const FormSignUp = () => {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', password2:''
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
        if (formData.password === formData.password2) {
        e.preventDefault()
        try {
          const{data,error}=await supabase.auth.signUp(
            {
              email: formData.email,
              password: formData.password,
              options:{data:{name: formData.name}}
            }
          )
          if (error) {
            throw (error)
          } else {
              alert('Compruebe su correo electrónico. Tiene que haber recibido un enlace de verificación')
              navigate('/')
            }
        } catch (error) {
            alert(error)
        }
        }else{
          alert("Las contraseñas no son iguales")
          navigate('/signup')
        }
      }

  return (
    <form onSubmit={handleSubmit} className="bg-hero rounded-full px-10 pt-6 pb-8 mb-4 w-11/12 min-w-52 align-middle">
      <div className="grid justify-items-center space-y-10 pt-5">
        <h2 className="text-4xl font-bold text-white bg-pink-500 rounded-md p-2">Caissateca</h2>
        <div className="grid justify-items-center space-y-3">
          <BasicInput placeholder={"Nombre"} name={"name"} onChange={handleChange} />
          <br />
          <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
          <br />
          <BasicInput placeholder={"Contraseña"} name={"password"} type={"password"} onChange={handleChange} />
          <br />
          <BasicInput placeholder={"Repita contraseña"} name={"password2"} type={"password"} onChange={handleChange} />
          <br />
          <div className="grid justify-items-center">
            <BasicButton type={"Submit"} text={"Enviar"}
            className={"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded"}
            />
          </div>
          <p className="text-white bg-pink-500 rounded-md p-2 grid justify-items-center">
            ¿Ya tienes una cuenta? <Link to='/'
            className="font-bold text-green-300 dark:text-green-500 hover:underline">
              Entrar
            </Link>
          </p>
        </div>

      </div>
    </form>
  )
}

export default FormSignUp