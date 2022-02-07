import { createSlice } from '@reduxjs/toolkit';

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState: '',
  reducers: {
    displayError: (_, action) => {
      return action.payload.errorMessage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => {
        return '';
      })    
  },
});

export const { displayError, clearError } = errorMessageSlice.actions;

export const errorMessageReducer = errorMessageSlice.reducer;