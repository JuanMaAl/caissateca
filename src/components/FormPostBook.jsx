import React, { useState } from 'react'
import BasicInput from './BasicInput'

const FormPostBook = () => {

  const [libro, setLibro] = useState({
    titulo:'', editorial:'', autor:'', tema:'', 
  })

  console.log(user)

  function handleChange(event){
    setLibro(prevFormData=>{
      return{
        ...prevFormData, 
        [event.target.titulo]:event.target.value
      }
    })
  }


  return (
    <form>
         <BasicInput placeholder={"Título"} name={"titulo"} onChange={handleChange}/>
         <BasicInput placeholder={"Editorial"} name={"editorial"} onChange={handleChange}/>
         <BasicInput placeholder={"Autor"} name={"autor"} onChange={handleChange}/>
         <BasicInput placeholder={"Tema"} name={"tema"} onChange={handleChange}/>
        

    </form>
  )
}

export default FormPostBook