import React from 'react'
import {useStore} from '../../store/testStore'

const BearControl = () => {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}

export default BearControl