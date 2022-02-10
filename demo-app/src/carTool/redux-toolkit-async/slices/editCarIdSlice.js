import { createSlice } from '@reduxjs/toolkit';

export const editCarIdSlice = createSlice({
  name: 'editCarId',
  initialState: -1,
  reducers: {
    editCar(_, action) {
      return action.payload;
    },
    cancelCar() {
      return -1;
    }
  },
  extraReducers: builder => {
    builder.addDefaultCase(() => -1);
  },
});

export const { editCar, cancelCar } = editCarIdSlice.actions;

export const editCarIdReducer = editCarIdSlice.reducer;