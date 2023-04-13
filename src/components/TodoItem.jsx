import { Button, Checkbox, IconButton, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodoContext } from "../provider/provider";
import "../styles/checked.css";
import { useState } from "react";

export const TodoItem = (props) => {
  const  { id,text,completed } = props
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const {toggleTodo,removeTodo,editTodo} = useTodoContext()
  const [editingText, setEditingText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);


  const handleEditButtonClick = () => {
    setIsEditing(true)
  };

  const handleTodoTextChange = (event) => {
      setEditingText(event.target.value)
  };

  const handleSaveButtonClick = () => {
    editTodo({ ...props, text: editingText });
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
        alignItems: "center",
        boxShadow: "0px 0px 10px 5px rgba(54, 54, 54, 0.2)"
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
            
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography className={completed ? "completed" : ''} >{text}</Typography>
          <Stack direction="row" spacing={3}>
            <Checkbox {...label}  onChange={() => toggleTodo(id)}  checked={completed} />
            <Button onClick={handleEditButtonClick}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Button>
            <Button onClick={() => removeTodo(id)}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Button>
          </Stack>
        </Box>
        )}
        </Box>
  );
};
