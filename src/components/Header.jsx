import React from 'react'
import {useNavigate} from 'react-router-dom'
import BasicButton from '../components/BasicButton'
import { useTokenStore } from '../store/tokenStore'
import { useCollectionStore } from '../store/collectionStore'

//Crea la cabecera de la aplicacición. Incluye botones
// para volver al Home, Añadir nuevos libros y Salir del usuario

const Header = (props) => {

    let navigate = useNavigate()

    function handleLogout() {
      useCollectionStore.setState( {collection: [],})
      useTokenStore.setState({name: '', idUser: '', thead: false,})
      sessionStorage.removeItem('token')
      navigate('/')
    }

    let userName = useTokenStore.getState().name;

    if (!userName) {
      userName = "Cody"
    } 

    //console.log(userName)

    function handleHome() {
      navigate('/homepage')
    }

    function handleAddBook(){
      navigate('/addbook')
    }



  return (
    <header className=" bg-pink-500 w-full px-3 space-x-3 py-2">
      <div className="flex justify-center space-x-4">
        <h3 className="text-2xl text-white mt-1">{userName} - {props.lugar}</h3> 
      </div>
      <div className="flex justify-center space-x-4">
        <BasicButton type={"Button"} text={"Home"} onClick={handleHome} 
        className={"bg-blue-500 hover:bg-blue-400 text-white text-center font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded h-8 mt-1.5 "}
        />
        <BasicButton type={"Button"} text={"Añadir"} onClick={handleAddBook} 
        className={"bg-green-500 hover:bg-green-400 text-white text-center font-bold py-1 px-4 border-b-4 border-green-900 hover:border-green-500 rounded h-8 mt-1.5 "}
        />
        <BasicButton type={"Button"} text={"Salir"} onClick={handleLogout} 
        className={"bg-red-700 hover:bg-red-400 text-white text-center font-bold py-1 px-4 border-b-4 border-red-900 hover:border-red-500 rounded h-8 mt-1.5 "}
        />
      </div>
    </header>
  )
}

export default Header
