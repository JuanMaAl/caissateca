import React, { useTransition } from 'react'
import {useNavigate} from 'react-router-dom'
import BasicButton from '../components/BasicButton'
import { useTokenStore } from '../store/tokenStore'
import { useCollectionStore } from '../store/collectionStore'

const Header = () => {

    let navigate = useNavigate()

    function handleLogout() {
      useCollectionStore.setState( {collection: [],})
      useTokenStore.setState({name: '', idUser: '', thead: false,})
      sessionStorage.removeItem('token')
      navigate('/')
    }

    const userName = useTokenStore.getState().name;
    console.log(userName)



  return (
    <header className=" bg-pink-500 w-full px-5 space-x-3 py-2">
      <div className="flex justify-center space-x-4">
        <h3 className="text-2xl text-white mt-1" >Caissateca App</h3>
      </div>
      <div className="flex justify-center space-x-4">
        <h3 className="text-2xl text-white mt-1">{userName}</h3> 
        <BasicButton type={"Button"} text={"Salir"} onClick={handleLogout} 
        className={"bg-red-500 hover:bg-red-400 text-white text-center font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded h-8 mt-1.5 "}
        />
      </div>
    </header>
  )
}

export default Header
