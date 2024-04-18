import React from 'react'

const BasicInput = (props) => {

  return (
    <input 
    placeholder={props.placeholder}
    name={props.name}
    type={props.type}
    onChange={props.onChange}
    className="px-2 bg-orange-200 rounded-md"
    />
  )
}

export default BasicInput