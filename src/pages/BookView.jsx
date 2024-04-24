import React from 'react'
import Header from '../components/Header'

const BookView = ({token}) => {
  return (
    <div>
        <Header token={token} lugar={"Vista Detallada"} />
        <div>BookView</div>
    </div>

  )
}

export default BookView