import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import ButtonSubmit from './ButtonSubmit'
import BasicInput from './BasicInput'

const FormLogin = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
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
      }

      return (
    <form onSubmit={handleSubmit}>
    <BasicInput placeholder={"Nombre"} name={"name"} onChange={handleChange} />
    <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
    <BasicInput placeholder={"Contraseña"} name={"password"} type={"password"} onChange={handleChange} />
    <ButtonSubmit />
  </form>
  )
}

export default FormLogin