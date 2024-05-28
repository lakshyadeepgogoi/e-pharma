import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    },
  },
  extraReducers:()=>{

  }
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export const selectCount = (state) => state.counter.vale

export default counterSlice.reducer