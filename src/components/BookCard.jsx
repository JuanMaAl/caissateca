import React from 'react'
import BasicButton from './BasicButton'
import {useNavigate} from 'react-router-dom'
import { useDeleteBook } from '../hooks/useDeleteBook '
import { useBookViewStore } from '../store/bookViewStore'

function BookCard(props) {

  let navigate = useNavigate()

  async function deleteBook() {
    const bookId = useBookViewStore.getState().bookId
    useDeleteBook(bookId)
    navigate("/homepage")
    }

  return (
    <div className="max-w-sm bg-pink-200 border border-gray-200 rounded-lg shadow mt-10">
      <div className="p-5">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-900 dark:text-white">{props.titulo}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Editorial: {props.editorial}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Autor: {props.autor}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tema: {props.tema}</p>
          <p className="flex justify-center space-x-3">
            <BasicButton type={"Button"} text={"Actualizar"} 
            className={"bg-blue-500 hover:bg-blue-400 text-white text-center font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded h-8 mt-1.5 "}
            />
            <BasicButton type={"Button"} text={"Eliminar"} onClick={deleteBook}
            className={"bg-red-500 hover:bg-red-400 text-white text-center font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded h-8 mt-1.5 "}
            />
          </p>
      </div>
    </div>
  )
}

export default BookCard