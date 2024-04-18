import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import BasicButton from './BasicButton'
import BasicInput from './BasicInput'
import { Link } from 'react-router-dom'

const FormLogin = () => {

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
            }
        } catch (error) {
            alert(error)
        }
        }else{alert("Las contraseñas no son iguales")}
      }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-orange-200 to-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div className="grid justify-items-center space-y-3">
    <h1 className="text-4xl font-bold">Caissateca</h1>
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
        className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}
       />
       </div>
       <br />
    <p>
      ¿Ya tienes una cuenta? <Link to='/'
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Entrar
      </Link>
    </p>
    </div>
    </form>
  )
}

export default FormLogin