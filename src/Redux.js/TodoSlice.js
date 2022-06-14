import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList:[
      {
          id:Math.random(),
          title:'todo item1',
          description:'description to do item 1',
          isDone:true,
      },
      {
        id:Math.random(),
        title:'todo item2',
        description:'description to do item 2',
        isDone:false,
    },
    {
        id:Math.random(),
        title:'todo item3',
        description:'description to do item 3',
        isDone:false,
    }





  ]
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = TodoSlice.actions

export default TodoSlice.reducer