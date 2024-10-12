import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const selectTodoList = state => state.todos.items;
export const { addTodo, deleteTodo } = todoSlice.actions;
