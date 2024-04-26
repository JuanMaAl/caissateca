import React from 'react'
import Header from '../components/Header'
import FormPostBook from '../components/FormPostBook'
import BasicButton from '../components/BasicButton'
import {useNavigate} from 'react-router-dom'

const AddBook = ({token}) => {

  let navigate = useNavigate()

  function handleClick(){
    navigate('/homepage')
  }

  const addButton = (<svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
</svg>)

  const addButtonText = "Mostrar Contenido"

  return (
    <div className="grid justify-items-center space-y-8">
      <Header token={token} lugar={"Añadir"}/>
      <div>
        <FormPostBook />
      </div>
    </div>
  )
}

export default AddBook