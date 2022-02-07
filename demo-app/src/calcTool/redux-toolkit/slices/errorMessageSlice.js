import { createSlice } from '@reduxjs/toolkit';

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState: {
    errorMessage: ''
  },
  reducers: {
    displayError: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
    },
    extraReducers: (builder) => {
      builder
        .addDefaultCase((state) => {
          state.errorMessage = '';
        })    
    },
  },
});

export const { displayError, clearError } = errorMessageSlice.actions;

export const errorMessageReducer = errorMessageSlice.reducer;