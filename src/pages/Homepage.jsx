import React from 'react'
import {useNavigate} from 'react-router-dom'
import BasicButton from '../components/BasicButton'

const Homepage = ({token}) => {

  let navigate = useNavigate()

  function handleLogout() {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <h3 className="text-4xl">Bienvenido, {token.user.user_metadata.name}</h3> 
      <BasicButton type={"Button"} text={"Salir"} onClick={handleLogout}/>
    </div>
  )
}

export default Homepage