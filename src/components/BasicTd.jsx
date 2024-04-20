import React from 'react'

const BasicTd = (props) => {
  return (
    <th className="border-4 border-pink-400 p-2 text-pink-600">{props.text}</th>
  )
}

export default BasicTd