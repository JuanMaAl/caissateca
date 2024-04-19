import React from 'react'
import Header from '../components/Header'

const Homepage = ({token}) => {


  return (
    <div className="grid justify-items-center">
      <Header token={token}/>
      
    </div>
  )
}

export default Homepage