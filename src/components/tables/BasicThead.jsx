import React from 'react'
import BasicTh from './BasicTh'
import BasicButton from '../BasicButton'
import {useNavigate} from "react-router-dom"

const BasicThead = () => {

  return (
      <thead>
        <tr className="flex justify-center">
          <BasicTh text={"Títulos"}/>      
        </tr>
      </thead>
  )
}

export default BasicThead