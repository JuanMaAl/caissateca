import React from 'react'
import {useStore} from '../../store/testStore'

const BearCounter = () => {
    const bears = useStore((state) => state.bears)

  return (
    <h1>{bears} around here...</h1>
  )
}

export default BearCounter