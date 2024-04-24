import React from 'react'

const BasicButton = (props) => {
  return (
  <button type={props.type} onClick={props.onClick} className={props.className}>
    <span className="flex justify-center">{props.text}{props.text2}</span>
  </button>
  )
}

export default BasicButton