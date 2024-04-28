import React from 'react'
import BasicButton from '../BasicButton'
import { useBookViewStore } from '../../store/bookViewStore'
import BasicTh from './BasicTh'

// Es la tabla con la vista detallada del libro, en ella
// Pueden leerse sus propiedades

const BookViewTable = () => {

  const actualBook = useBookViewStore.getState().book

  return (
    <>
        <Header />
    <table>
      <thead>
        <tr className="flex justify-start">
          <th>
          <BasicButton text={updateButton}/>
          </th>
          <th>
          <BasicButton text={removeButton}/>
          </th>
          <BasicTh text={actualBook.titulo} />
        </tr>
      </thead>
      <tbody>

   </tbody>
    </table>

    </>

  )
}

export default BookViewTable