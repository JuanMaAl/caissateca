import React from 'react'

const Homepage = ({token}) => {
  return (
    <div>Bienvenido, {token.user.user_metadata.name} </div>
  )
}

export default Homepage