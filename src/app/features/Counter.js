import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice";


export const Counter = () => {
  let counter = useSelector((state) => state.counter.counter)
  let dispatch = useDispatch();
  console.log(counter)
  return (
    <div>
      Hello World 
      <br></br>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      <br></br>
      <span>{counter}</span>
      <br></br>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
  )
}