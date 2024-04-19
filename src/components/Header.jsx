import React from 'react'
import {useNavigate} from 'react-router-dom'
import BasicButton from '../components/BasicButton'

const Header = ({token}) => {

    let navigate = useNavigate()

    function handleLogout() {
      sessionStorage.removeItem('token')
      navigate('/')
    }


  return (
    <header className="flex justify-between bg-pink-500 w-full px-10 space-x-3 py-2">
      <h3 className="text-3xl text-white justify-start">Caissateca</h3>
      <div className="flex justify-between space-x-2">
        <h3 className="text-3xl text-white">{token.user.user_metadata.name}</h3> 
        <BasicButton type={"Button"} text={"Salir"} onClick={handleLogout} 
        className={"bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"}
        />
      </div>
    </header>
  )
}

export default Header
