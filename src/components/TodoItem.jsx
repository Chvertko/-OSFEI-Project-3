import { Button, Checkbox, IconButton, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { editTodo, toggleTodo, removeTodo } from '../provider/todoSlice'
import "../styles/checked.css";
import { useState } from "react";
import { useDispatch } from 'react-redux'

export const TodoItem = (props) => {
  const  { id,text,completed } = props
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [editingText, setEditingText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch()
  const handleEditButtonClick = () => {
    setIsEditing(true)
  };

  const handleTodoTextChange = (event) => {
      setEditingText(event.target.value)
  };

  const handleSaveButtonClick = () => {
    dispatch(editTodo({ ...props, text: editingText }))
    setIsEditing(false);
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
  };
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        width:"100%",
        alignItems: "center",
      }}
    >
        {isEditing ? 
        (
        <Stack direction="row" spacing={3}>
          <TextField value={editingText} onChange={handleTodoTextChange} />
          <Button onClick={handleSaveButtonClick}>Save</Button>
          <Button onClick={handleCancelButtonClick}>Cancel</Button>
        </Stack>
        ) 
        : 
        (
            
          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width:'100%',
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            sx={{ flex: 1, marginRight: "1rem" }}
            className={completed ? "completed" : ""}
          >
            {text}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Checkbox
              {...label}
              onChange={() => dispatch(toggleTodo(id))}
              checked={completed}
            />
            <Button onClick={handleEditButtonClick}>
              <EditIcon />
            </Button>
            <Button onClick={() => dispatch(removeTodo(id))}>
              <DeleteIcon />
            </Button>
          </Stack>
        </Box>        
        )}
    </Box>
  );
};
