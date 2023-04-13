import React, { useState} from 'react';
import { TextField, Button } from '@mui/material';
import { useTodoContext } from '../provider/provider';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodoContext()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Ignore empty input values
    addTodo({
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    });
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add Todo"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Add
      </Button>
    </form>
  );
};