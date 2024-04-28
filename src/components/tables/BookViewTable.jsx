import React from 'react'
import BasicButton from '../BasicButton'
import { useBookViewStore } from '../../store/bookViewStore'
import BasicTh from './BasicTh'


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