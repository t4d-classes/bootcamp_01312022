import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from '../../../shared/services/apiData';

const {
  all: _allCars,
  append: _appendCar,
  replace: _replaceCar,
  remove: _removeCar,
} = createApi('cars');

export const refreshCars = createAsyncThunk(
  'cars/refresh',
  async () => {
    return await _allCars();
  }
)

export const addCar = createAsyncThunk(
  'cars/add',
  async (car, { dispatch }) => {
    await _appendCar(car);
    return dispatch(refreshCars());
  }
)

export const saveCar = createAsyncThunk(
  'cars/save',
  async (car, { dispatch }) => {
    await _replaceCar(car);
    return dispatch(refreshCars());
  }
)

export const deleteCar = createAsyncThunk(
  'cars/delete',
  async (carId, { dispatch }) => {
    await _removeCar(carId);
    return dispatch(refreshCars());
  }
)

export const carsSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(refreshCars.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;