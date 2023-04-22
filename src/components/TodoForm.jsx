import React, { useState} from 'react';
import { TextField, Button } from '@mui/material';
import '../styles/form.css'
import { addTodo } from '../provider/todoSlice';
import { useDispatch } from 'react-redux';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Ignore empty input values
    dispatch(
      addTodo({
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      })
    )
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <TextField
        label="Add Todo"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <Button variant="contained" type="submit" sx={{ ml: '10px' }}>
              Add
            </Button>
          ),
        }}
      />
    </form>

  );
};