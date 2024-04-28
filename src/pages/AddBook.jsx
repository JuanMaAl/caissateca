import React from 'react'
import Header from '../components/Header'
import FormPostBook from '../components/FormPostBook'
import BasicButton from '../components/BasicButton'
import {useNavigate} from 'react-router-dom'

//Vista de la página para añadir libros, incluye un formulario y un botón

const AddBook = ({token}) => {

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Añadir"}/>
      <div>
        <FormPostBook />
      </div>
    </div>
  )
}

export default AddBook