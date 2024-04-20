import React from 'react'
import BasicTh from './BasicTh'

const BasicThead = () => {
  return (
    <thead>
    <tr className="border-4 border-pink-400">
      {/* <BasicTh text={"Id"}/> */}
      {/* <BasicTh text={"Usuario"}/> */}
      <BasicTh text={"Título"}/>
      <BasicTh text={"Editorial"}/>
      <BasicTh text={"Autor"}/>
      <BasicTh text={"Tema"}/>
    </tr>
  </thead>
  )
}

export default BasicThead