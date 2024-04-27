import React from 'react'
import Header from '../components/Header'
import BasicThead from '../components/tables/BasicThead'
import BasicTbody from '../components/tables/BasicTbody'
import { useTokenStore } from '../store/tokenStore'

const Homepage = ({token}) => {

  useTokenStore.setState( {name: token.user.user_metadata.name})
  useTokenStore.setState( {idUser: token.user.id})

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Home"}/>
      <table className="table-auto mt-10 mb-4 border-collapse max-w-md w-11/12 bg-pink-200 border border-gray-200 rounded-lg shadow">
        <BasicThead />
        <BasicTbody token={token}/>
      </table>
    </div>
  )
}

export default Homepage