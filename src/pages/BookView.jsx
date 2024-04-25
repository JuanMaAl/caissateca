import React from 'react'
import BookViewTable from '../components/tables/BookViewTable'
import { useBookViewStore } from '../store/bookViewStore'



const BookView = ({token}) => {

  const saludo = useBookViewStore.getState().bookId


  return (
    // <>
    // <Header />
    // <BookViewTable />
    // </>
    <p>Hola BookId: {saludo}</p>
  )
}


export default BookView