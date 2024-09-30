import React from 'react'
import { useDispatch } from 'react-redux'
import action from './action'

const Showdaa = () => {
  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={dispatch(action)}>show data</button>
    </div>
  )
}

export default Showdaa