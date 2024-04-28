import React, { useState } from 'react'
import { useBookViewStore } from '../store/bookViewStore'
import BookCard from '../components/BookCard'
import Header from '../components/Header'
import {useReadBook} from '../hooks/useReadBook'

//Vista de la página del detalle del libro
// Utiliza la función obtainBookData que llama al hook useReadBook
// pasándole el id del libro a leer en la BBDD

const BookView = ({token}) => {

  let nameBook = "cargando"

  async function obtainBookData() {
    const bookId = useBookViewStore.getState().bookId
    await useReadBook(bookId)
    const bookData = useBookViewStore.getState().book
    setTitulo(bookData[0].titulo)
    setEditorial(bookData[0].editorial)
    setAutor(bookData[0].autor)
    setTema(bookData[0].tema)
  }

 let [titulo, setTitulo] = useState("cargando")
 let [editorial, setEditorial] = useState("cargando")
 let [autor, setAutor] = useState("cargando")
 let [tema, setTema] = useState("cargando")

  obtainBookData()

  return (
    <>
    <Header lugar={"Libro"}/>
    <div className="flex justify-center">
      <BookCard 
        titulo={titulo} 
        editorial={editorial}
        autor={autor}
        tema={tema}
      />
    </div>
    </>
  )
}




export default BookView