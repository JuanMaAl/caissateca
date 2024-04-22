import React, { useEffect } from 'react'
import Header from '../components/Header'
import BasicThead from '../components/tables/BasicThead'
import BasicTbody from '../components/tables/BasicTbody'
import BasicButton from '../components/BasicButton'
import {useNavigate} from 'react-router-dom'
import { useTokenStore } from '../store/tokenStore'



const Homepage = ({token}) => {

  let navigate = useNavigate()

  useTokenStore.setState( {name: token.user.user_metadata.name})
  useTokenStore.setState( {idUser: token.user.id})

  function handleClick(){
    navigate('/homepage')
    useTokenStore.setState({thead: true,})
  }

  function handleClick2(){
    navigate('/addbook')
  }

  const addButton = (<svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
</svg>)

  const addButtonText = "Mostrar Contenido"

  let isThead = useTokenStore.getState().thead

  const addButton2 = (<svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
</svg>)

  const addButton2Text = "Añadir Contenido"

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Home"}/>
      <table className="table-auto border-4 border-pink-800 mt-10 mb-4 border-collapse max-w-md w-11/12">
        {isThead ? <BasicThead /> : ''}
        <BasicTbody token={token}/>
      </table>
      <div>
        <p className="flex justify-normal text-blue-800 font-extrabold mt-5">
        <BasicButton text={addButton} onClick={handleClick}/>
          {addButtonText}</p>
        <p className="flex justify-normal text-green-800 font-extrabold mt-5">
        <BasicButton text={addButton2} onClick={handleClick2}/>
          {addButton2Text}</p>
      </div>
    </div>

  )
}

export default Homepage