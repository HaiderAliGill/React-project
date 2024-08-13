import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {},
    clearTodo: (state, action) => {},
  },
});

console.log("Action", todoSlice);

export const { addTodo, deleteTodo, clearTodo } = todoSlice.actions;

export default todoSlice;
