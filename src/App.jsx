import React, { useState } from 'react'

const App = () => {

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

  return (
    <div>

      <h1>Caissateca (Alfa)</h1>

      <form action="">
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
        onChange={handleChange}
        />

        <button type='submite' >
          Enviar
        </button>

      </form>




    </div>
  )
}

export default App