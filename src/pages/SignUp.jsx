import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'


const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

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
    <div>

      <h1>Caissateca (Alfa)</h1>

      <form onSubmit={handleSubmit}>
        <input 
        placeholder='Nombre'
        name='name'
        onChange={handleChange}
        />
        <input 
        placeholder='Correo electrónico'
        name='email'
        onChange={handleChange}
        />
        <input 
        placeholder='Contraseña'
        name='password'
        type='password'
        onChange={handleChange}
        />

        <button type='submite' >
          Enviar
        </button>

      </form>
      ¿Ya tienes una cuenta? <Link to='/'>Entrar</Link>
    </div>
  )
}

export default SignUp