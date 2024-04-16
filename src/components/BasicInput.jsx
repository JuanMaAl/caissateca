import React from 'react'

const BasicInput = (props) => {

  return (
    <input 
    placeholder={props.placeholder}
    name={props.name}
    type={props.type}
    onChange={props.onChange}
    />
  )
}

export default BasicInput