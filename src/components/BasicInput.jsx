import React from 'react'

const BasicInput = (props) => {

  return (
    <input 
    placeholder={props.placeholder}
    name={props.name}
    type={props.type}
    onChange={props.onChange}
    className="px-2 bg-pink-200 rounded-md text-white focus:placeholder-pink-400"
    />
  )
}

export default BasicInput