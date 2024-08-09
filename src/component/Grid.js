import React, { useState } from 'react';
import Cell from './Cell';

const ROWS = 20;
const COLS = 50;

const emptyData = () => {
  const data = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
  return data;
};

const Grid = ({ searchTerm }) => {
  const [data, setData] = useState(emptyData());
  const [focusedCell, setFocusedCell] = useState(null);

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = data.map((row, rIndex) => 
      row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? value : cell))
    );
    setData(newData);
  };

  const handleFocusCell = (rowIndex, colIndex) => {
    setFocusedCell({ rowIndex, colIndex });
  };

  const filteredData = data.map(row => row.filter(cell => cell.includes(searchTerm)));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
        gap: '1px',
        maxWidth: '100%',
        overflow: 'auto',
      }}
    >
      {filteredData.flat().map((cellValue, index) => {
        const rowIndex = Math.floor(index / COLS);
        const colIndex = index % COLS;
        return (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            rowIndex={rowIndex}
            colIndex={colIndex}
            value={cellValue}
            onChange={handleCellChange}
            isFocused={focusedCell && focusedCell.rowIndex === rowIndex && focusedCell.colIndex === colIndex}
            onFocus={handleFocusCell}
          />
        );
      })}
    </div>
  );
};

export default Grid;
