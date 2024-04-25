import React from 'react'
import { useEffect } from 'react'
import BasicTd from './BasicTd'
import { useReadCollection } from '../../hooks/useReadCollection'
import { useCollectionStore } from '../../store/collectionStore'
import ViewButton from './Buttons/ViewButton'

const BasicTbody = () => {

    useEffect(() => {
      useReadCollection()
    }, [])


const books = useCollectionStore.getState().collection
console.log(books)


  return (
    <tbody>
    { books.map((libro, key)=>
        <tr key={key} className="flex justify-start">
          <td>
            <ViewButton libroId = {libro.id} />
          </td>
          <BasicTd text={libro.titulo}/>
       </tr>
      )}
   </tbody>
  )
}

export default BasicTbody