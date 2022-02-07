import { configureStore } from '@reduxjs/toolkit'

import { historyReducer } from './slices/historySlice';
import { errorMessageReducer } from './slices/errorMessageSlice';

export const calcToolStore = configureStore({
  reducer: {
    history: historyReducer,
    errorMessage: errorMessageReducer,
  },
});