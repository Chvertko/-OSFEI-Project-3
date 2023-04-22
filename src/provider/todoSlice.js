import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoList : [],
    filter:'all',
}
export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todoList.push(action.payload)
        },
        removeTodo: (state,action) => {
            const filteredList = state.todoList.filter((item) => item.id !== action.payload);
            state.todoList = filteredList
        },  
        toggleTodo: (state, action) => {
            const todo = state.todoList.find(todo => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
          editTodo: (state, action) => {
            const updatedTodo = action.payload;
            const index = state.todoList.findIndex(todo => todo.id === updatedTodo.id);
            if (index !== -1) {
              state.todoList.splice(index, 1, updatedTodo);
            }
          },
            selectTodos: (state,action) => {
                state.filter = action.payload
            },
        clearTodoList: (state,action) => {
            state.todoList = action.payload
        }
    }
})
export const {addTodo,removeTodo,toggleTodo,editTodo,selectTodos,clearTodoList} = todoSlice.actions
export default todoSlice.reducer