import React from 'react'
import { useBookViewStore } from '../../../store/bookViewStore'
import {useNavigate} from 'react-router-dom'


const ViewButton = (props) => {

   let navigate = useNavigate()

  const eyeButton = (<svg className="w-6 h-6 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
  <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
)

function handleViewButtonClick() {
  useBookViewStore.setState({bookId: props.libroId})
    navigate('/bookview')
}



  return (
  <button onClick={handleViewButtonClick}>
    <span className="flex justify-center">{eyeButton}</span>
  </button>
  )
}

export default ViewButton