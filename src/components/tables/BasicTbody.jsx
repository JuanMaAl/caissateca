import React from 'react'
import { useEffect } from 'react'
import BasicTd from './BasicTd'
import BasicButton from '../BasicButton'
import {useNavigate} from 'react-router-dom'
import { useReadCollection } from '../../hooks/useReadCollection'
import { useCollectionStore } from '../../store/collectionStore'


const BasicTbody = () => {

  let navigate = useNavigate()

  function handleClick(){
    navigate('/bookview')
  }

    useEffect(() => {
      useReadCollection()
    }, [])

    const eyeButton = (<svg className="w-6 h-6 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  </svg>
  )
    const updateButton = (<svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"/>
  </svg>)

  const removeButton = (<svg className="w-6 h-6 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/>
</svg>
)

const books = useCollectionStore.getState().collection
console.log(books)


  return (
    <tbody>
    { books.map((libro, key)=>
        <tr key={key} className="flex justify-start">
          <BasicButton text={eyeButton} onClick={handleClick}/>
          <BasicTd text={libro.titulo} estilos={"border-4 border-pink-400"} />
            {/* <BasicButton text={updateButton}/>
            <BasicButton text={removeButton}/> */}
        </tr>
      )}
   </tbody>
  )
}

export default BasicTbody