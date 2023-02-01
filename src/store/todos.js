import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push({
        id: action.payload,
        message: action.payload,
        completed: false,
      });
    },
  },
});

export default todos;
