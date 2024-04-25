import React, { useEffect } from 'react'
import Header from '../components/Header'
import BasicThead from '../components/tables/BasicThead'
import BasicTbody from '../components/tables/BasicTbody'
import {useNavigate} from 'react-router-dom'
import { useTokenStore } from '../store/tokenStore'



const Loadingpage = ({token}) => {

  let navigate = useNavigate()

  useTokenStore.setState( {name: token.user.user_metadata.name})
  useTokenStore.setState( {idUser: token.user.id})

  function handleClick(){
    navigate('/homepage')
    useTokenStore.setState({thead: true,})
  }


  setTimeout(function(){
    handleClick();
}, 500);

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Loading"}/>
      <table className="table-auto border-4 border-pink-800 mt-10 mb-4 border-collapse max-w-md w-11/12">
        <BasicTbody token={token}/>
      </table>
      <div>
    <p className="text-pink-800">Loading ...</p>
      </div>
    </div>

  )
}

export default Loadingpage