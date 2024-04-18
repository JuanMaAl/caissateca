import React from 'react'
import ButtonSubmit from './ButtonSubmit'
import { useState, useEffect } from 'react'
import { supabase } from '../client'
import BasicInput from './BasicInput'
import {useNavigate} from 'react-router-dom'

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
    <form onSubmit={handleSubmit}>
    <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
    <BasicInput placeholder={"Contraseña"} name={"password"} type={"password"} onChange={handleChange} />
    <ButtonSubmit />
  </form>
  )
}


export default FormLogin