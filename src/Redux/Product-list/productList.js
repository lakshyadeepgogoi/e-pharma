import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ProductList() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
     
    </div>
  )
}