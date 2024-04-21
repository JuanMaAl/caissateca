import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import BasicTd from '../components/tables/BasicTd'
import BasicThead from '../components/tables/BasicThead'
import BasicTbody from '../components/tables/BasicTbody'

const Homepage = ({token}) => {

  const addButton = (<svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
</svg>)

  const addButtonText = "Añadir un nuevo libro"

  return (
    <div className="grid justify-items-center">
      <Header token={token}/>
      <table className="table-auto border-4 border-pink-400 mt-10 mb-4 border-collapse max-w-2xl w-full">
        <BasicThead />
        <BasicTbody token={token}/>
      </table>
      <p className="flex justify-center text-green-800 font-extrabold">{addButton}  {addButtonText}</p>
    </div>
  )
}

export default Homepage