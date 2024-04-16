import React from 'react'
import ButtonSubmit from './ButtonSubmit'
import { useState } from 'react'
import { supabase } from '../client'
import BasicInput from './BasicInput'

const FormLogin = () => { 

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
          async function signInWithEmail() {
            const { data, error } = await supabase.auth.signInWithPassword({
              email: formData.email,
              password: formData.password,
            })
          }
          if (error) {
            console.log(data)
            throw (error)
          }
        } catch (error) {
            alert(error)
        }
      }

      return (
    <form onSubmit={handleSubmit}>
    <BasicInput placeholder={"Nombre"} name={"name"} onChange={handleChange} />
    <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
    <ButtonSubmit />
  </form>
  )
}

export default FormLogin