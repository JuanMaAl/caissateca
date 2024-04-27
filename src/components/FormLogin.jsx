import React from 'react'
import BasicButton from './BasicButton'
import { useState } from 'react'
import { supabase } from '../client'
import BasicInput from './BasicInput'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTokenStore } from '../store/tokenStore'
import { useCollectionStore } from '../store/collectionStore'

useCollectionStore.setState( {collection: [],})
useTokenStore.setState({name: "", idUser: "",})

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

  //console.log(formData)

      async function handleSubmit(e){
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
              email: formData.email,
              password: formData.password,
            })
          if (error) throw (error)
          //console.log(data)
          setToken(data)
          navigate('/homepage')

        }catch (error) {
            alert(error)
         }}

    return (
      <>
      <form onSubmit={handleSubmit} className="bg-hero rounded-full px-10 pt-6 pb-8 mb-4 w-11/12 min-w-52 align-middle">
        <div className="grid justify-items-center space-y-20 pt-5">
        <h1 className="text-4xl font-bold text-white bg-pink-500 rounded-md p-2">Caissateca</h1>
          <div className="grid justify-items-center space-y-3">
            <BasicInput placeholder={"Correo Electrónico"} name={"email"} onChange={handleChange} />
            <br />
            <BasicInput placeholder={"Contraseña"} name={"password"} type={"password"} onChange={handleChange} />
            <br />
            <div className="grid justify-items-center">
              <BasicButton type={"Submit"} text={"Entrar"}
              className={"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded"}
              />
            </div>
            <br />
            <p className="text-white bg-pink-500 rounded-md p-2 grid justify-items-center">
              ¿No tienes cuenta? <br /><Link to='/SignUp'
              className="font-bold text-green-300 dark:text-green-500 hover:underline">
                Nueva Cuenta
              </Link>
            </p>
          </div>
   
        </div>
      </form>
      </>
    )
}


export default FormLogin