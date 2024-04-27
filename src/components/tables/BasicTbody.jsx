import React, { useEffect, useState } from 'react'
import BasicTd from './BasicTd'
import { useReadCollection } from '../../hooks/useReadCollection'
import { useCollectionStore } from '../../store/collectionStore'
import ViewButton from './Buttons/ViewButton'

const BasicTbody = () => {

    const [collection, setCollection] = useState([])

    useEffect(()=>{
      async function obtainCollectData() {
        await useReadCollection()
        const collectionData = useCollectionStore.getState().collection
        console.log(collectionData)
        setCollection(collectionData)
      }
      obtainCollectData()
    },[])

  return (
    <tbody>
    { collection.map((libro, key)=>
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