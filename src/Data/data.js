import create from 'zustand';

export const useStore = create((set) => ({
  data: Array.from({ length: 20 }, () => Array(50).fill('')),
  setCellValue: (rowIndex, colIndex, value) => set((state) => {
    const newData = state.data.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? value : cell))
    );
    return { data: newData };
  }),
}));
