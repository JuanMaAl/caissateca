import React from 'react'
import { useBookViewStore } from '../store/bookViewStore'
import BookCard from '../components/BookCard'
import Header from '../components/Header'
import {useReadBook} from '../hooks/useReadBook'



const BookView = ({token}) => {

  const bookId = useBookViewStore.getState().bookId
  useReadBook(bookId)
  const bookData = useBookViewStore.getState().book
  const bookDataObject = bookData[0]
  console.log (bookData)
  console.log(bookDataObject)
  const id = bookDataObject.id
  


  return (
    <>
    <Header lugar={"Vista Detallada"}/>
    <div className="flex justify-center">
      <BookCard />
    </div>
    <p>Hola BookId: {id}</p>
    </>
  )
}




export default BookView