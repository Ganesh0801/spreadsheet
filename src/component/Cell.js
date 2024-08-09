import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';

const Cell = ({ rowIndex, colIndex, value, onChange, isFocused, onFocus }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  }, [isFocused]);

  const handleChange = (e) => {
    onChange(rowIndex, colIndex, e.target.value);
  };

  const handleFocus = () => {
    onFocus(rowIndex, colIndex);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        display: 'inline-block',
        padding: '8px',
        width: '100px',
        height: '40px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={() => setEditing(false)}
        fullWidth
        variant="standard"
        InputProps={{
          disableUnderline: !editing,
        }}
      />
    </Box>
  );
};

export default Cell;

