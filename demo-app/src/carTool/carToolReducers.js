import { combineReducers } from 'redux';

import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from './carToolActions';

export const carsReducer = (cars = [], action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

  return cars;
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION,
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

export const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.endsWith('REQUEST')) {
    return true;
  }

  if (action.type.endsWith('DONE')) {
    return false;
  }

  return isLoading;
}

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
  isLoading: isLoadingReducer,
});


