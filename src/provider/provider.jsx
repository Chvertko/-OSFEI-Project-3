import { createContext, useContext, useEffect, useState } from "react";
import  useLocalStorage from '../hooks/useLocalStotage'
const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState('all');
    const [todo,setTodo] = useLocalStorage('todoList',[])
    useEffect(() => {
      setTodoList(todo)
    }, [todo]); 

    const addTodo = (todo) => {
      setTodoList([...todoList, todo])
      setTodo([...todoList, todo])
    };
    const removeTodo = (id) => {
      const filteredList = todoList.filter((item) => item.id !== id);
      setTodoList(filteredList);
      setTodo(filteredList)
    };
    const toggleTodo = (id) => {
      setTodoList(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo))
      setTodo(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const editTodo = (updatedTodo) => {
      const updatedTodos = todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
      setTodoList(updatedTodos);
      setTodo(updatedTodos)
    };
    const selectTodos = (event) => {
      setFilter(event)
    }

 
  const contextValue = {
    todoList,
    filter,
    setTodoList,
    addTodo,
    removeTodo,
    editTodo,
    toggleTodo,
    selectTodos
};

    return(
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider;