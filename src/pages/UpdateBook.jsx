import React from 'react'
import Header from '../components/Header'
import FormUpdateBook from '../components/FormUpdateBook'

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