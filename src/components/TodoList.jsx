import { Box } from "@mui/system";
import { Container } from "./Container";
import { Button, Stack, Typography } from "@mui/material";
import { TodoItem } from "./TodoItem";
import { SelectInput } from "./SelectInput";
import {  useDispatch, useSelector } from "react-redux";
import { clearTodoList } from "../provider/todoSlice";
export const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos.todoList)
  const filter = useSelector((state) => state.todos.filter)
  const completedTodos = todoList.filter(todo => todo.completed === true);
  const unCompletedTodos = todoList.filter(todo => todo.completed === false);
  const activeTodos = todoList.filter(todo => !todo.completed);
  console.log(todoList.length)
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Typography variant="h3" sx={{ marginTop: "30px", marginBottom: "30px" }}>
          TodoList
        </Typography>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{}}>
            <SelectInput/>
          </Box>
          <Box className="todos" sx={{width:'100%', display:'flex',flexDirection:'column',alignItems:'center' }}>
          {(() => {
            if (todoList.length === 0){
              
              return <Typography variant="h3" sx={{ marginTop: "30px", marginBottom: "30px",}}>Have no one Todo</Typography>
            }
            switch (filter) {
              case 'all':
                return todoList.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                  ))
              case 'done':
                return completedTodos.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                )
                  )
              case 'todo':
                return unCompletedTodos.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                ))
              default:
                return <div>Значение не определено</div>;
          }
          })()}
          </Box>
          <Stack sx={{margin:'0 auto',paddingTop:'30px'}} direction="row" spacing={2}>
            <Button onClick={() => dispatch(clearTodoList([]))}>Delete all</Button>
            <Button onClick={() => dispatch(clearTodoList(activeTodos))}>Delete add done</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
