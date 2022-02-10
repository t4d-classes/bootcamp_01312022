import { configureStore } from '@reduxjs/toolkit'

import { carsReducer } from './slices/carsSlice';
import { editCarIdReducer } from './slices/editCarIdSlice';
import { carsSortReducer } from './slices/carsSortSlice';

export const carToolStore = configureStore({
  reducer: {
    cars: carsReducer,
    editCarId: editCarIdReducer,
    carsSort: carsSortReducer,
  },
});