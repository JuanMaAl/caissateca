import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { supabase } from '../client'
import BasicTd from '../components/BasicTd'
import BasicThead from '../components/BasicThead'

const Homepage = ({token}) => {

  const [collection, setCollection] = useState([])

  useEffect(() => {
    fetchCollection()
  }, [])
  

  async function fetchCollection(){
    const{data} = await supabase
      .from('collection')
      .select()
      .eq('usuario', token.user.user_metadata.name)
      setCollection(data)
      console.log(data)
  }

  return (
    <div className="grid justify-items-center">
      <Header token={token}/>
      <table className="table-auto border-4 border-pink-400 m-10 border-collapse max-w-4xl w-full">
        <BasicThead />
        <tbody>
            { collection.map((libro, key)=>
                <tr key={key}>
                  {/* <BasicTd text={libro.id}/> */}
                  {/* <BasicTd text={libro.usuario} /> */}
                  <BasicTd text={libro.titulo} />
                  <BasicTd text={libro.editorial} />
                  <BasicTd text={libro.autor} />
                  <BasicTd text={libro.tema} />
                </tr>
              )}
        </tbody>
      </table>
    </div>
  )
}

export default Homepage