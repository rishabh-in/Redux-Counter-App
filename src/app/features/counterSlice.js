import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByValue: (state, payload) => {
      state.counter += payload
    },
    decrementByValue: (state, payload) => {
      state.counter -= payload
    }
  }
})

export const {increment, decrement, incrementByValue, decrementByValue} = counterSlice.actions;
export default counterSlice.reducer

