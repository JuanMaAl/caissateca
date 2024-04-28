import React from 'react'
import Header from '../components/Header'
import FormUpdateBook from '../components/FormUpdateBook'

//Vista de la página para editar libros

const UpdateBook = ({token}) => {

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Editar"}/>
      <div>
        <FormUpdateBook />
      </div>
    </div>
  )
}

export default UpdateBook