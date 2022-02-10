import { createSlice } from '@reduxjs/toolkit';

export const carsSortSlice = createSlice({
  name: 'carsSort',
  initialState: { column: 'id', direction: 'asc'},
  reducers: {
    sortCars(carsSort, action) {
    
      const column = action.payload;

      if (column !== carsSort.column) {
        carsSort.column = column;
        carsSort.direction = 'asc';
      } else {
        if (carsSort.direction === 'asc') {
          carsSort.direction = 'desc';
        } else {
          carsSort.direction = 'asc';
        }
      }    
    
    }
  },
});

export const { sortCars } = carsSortSlice.actions;

export const carsSortReducer = carsSortSlice.reducer;