import React, { useEffect, useState } from 'react'
import BasicTd from './BasicTd'
import { useReadCollection } from '../../hooks/useReadCollection'
import { useCollectionStore } from '../../store/collectionStore'
import ViewButton from './Buttons/ViewButton'

// Se encarga de devolver el cuerpo de la tabla que contiene todos los 
// títulos de los libros del usuario y el 
// botón de vista asociado a los mismos

const BasicTbody = () => {

    const [collection, setCollection] = useState([])

    useEffect(()=>{
      async function obtainCollectData() {
        await useReadCollection()
        const collectionData = useCollectionStore.getState().collection
        //console.log(collectionData)
        setCollection(collectionData)
      }
      obtainCollectData()
    },[])

  return (
    <tbody>
    { collection.map((libro, key)=>
        <tr key={key} className="flex justify-start m-2">
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