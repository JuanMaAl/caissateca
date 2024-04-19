import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { supabase } from '../client'
import BasicTh from '../components/BasicTh'

const Homepage = ({token}) => {

  const [collection, setCollection] = useState([])

  useEffect(() => {
    fetchCollection()
  }, [])
  

  async function fetchCollection(){
    const{data} = await supabase
      .from('collection')
      .select('*')
      setCollection(data)
      console.log(data)
  }

  return (
    <div className="grid justify-items-center">
      <Header token={token}/>
      <table className="table-auto border-4 border-pink-400 m-10 border-collapse max-w-4xl w-full">
        <thead>
          <tr className="border-4 border-pink-400">
            <BasicTh text={"Id"}/>
            <BasicTh text={"Usuario"}/>
            <BasicTh text={"Título"}/>
            <BasicTh text={"Editorial"}/>
            <BasicTh text={"Autor"}/>
            <BasicTh text={"Tema"}/>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export default Homepage