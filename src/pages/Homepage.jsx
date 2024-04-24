import React, { useEffect } from 'react'
import Header from '../components/Header'
import BasicThead from '../components/tables/BasicThead'
import BasicTbody from '../components/tables/BasicTbody'

const Homepage = ({token}) => {

  return (
    <div className="grid justify-items-center">
      <Header token={token} lugar={"Home"}/>
      <table className="table-auto border-4 border-pink-800 mt-10 mb-4 border-collapse max-w-md w-11/12">
        <BasicThead />
        <BasicTbody token={token}/>
      </table>
    </div>
  )
}

export default Homepage