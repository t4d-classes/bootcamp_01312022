import { combineReducers } from 'redux';

import {
  ADD_CAR_ACTION, SAVE_CAR_ACTION, DELETE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from './carToolActions';

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000},
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000},
];

export const carsReducer = (cars = carList, action) => {

  if (action.type === ADD_CAR_ACTION) {
    return [
      ...cars,
      {
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]
  }

  if (action.type === SAVE_CAR_ACTION) {
    const newCars = [...cars];
    const carIndex = newCars.findIndex(
      c => c.id === action.payload.car.id);
    newCars[carIndex] = action.payload.car;
    return newCars;
  }

  if (action.type === DELETE_CAR_ACTION) {
    return cars.filter(c => c.id !== action.payload.carId);
  }

  return cars;
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    ADD_CAR_ACTION,
    SAVE_CAR_ACTION,
    DELETE_CAR_ACTION,
    CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;
};

export const carsSortReducer = (
  carsSort = { column: 'id', direction: 'asc'}, action) => {

  if (action.type === SORT_CARS_ACTION) {

    const { column } = action.payload;

    if (column !== carsSort.column) {
      return {
        ...carsSort,
        column,
        direction: 'asc', 
      };
    } else {
      if (carsSort.direction === 'asc') {
        return {
          ...carsSort,
          direction: 'desc', 
        };
      } else {
        return {
          ...carsSort,
          direction: 'asc', 
        };
      }
    }
  }

  return carsSort;
}

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
});


