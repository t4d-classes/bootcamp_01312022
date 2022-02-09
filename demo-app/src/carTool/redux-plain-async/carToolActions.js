import { createApi } from '../../shared/services/apiData';

const {
  all: _allCars,
  append: _appendCar,
  replace: _replaceCar,
  remove: _removeCar,
} = createApi('cars');

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST';
export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';

export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export const createRefreshCarsDoneAction = (cars) => ({
  type: REFRESH_CARS_DONE_ACTION, payload: { cars },
});

export const refreshCars = () => {
  return async dispatch => {
    dispatch(createRefreshCarsRequestAction());
    const cars = await _allCars();
    dispatch(createRefreshCarsDoneAction(cars));
  };
};

export const createAddCarRequestAction = car => ({
  type: ADD_CAR_REQUEST_ACTION, payload: { car },
});

export const addCar = car => {
  return async dispatch => {
    dispatch(createAddCarRequestAction(car));
    await _appendCar(car);
    dispatch(refreshCars());
  };
}

export const createSaveCarRequestAction = car => ({
  type: SAVE_CAR_REQUEST_ACTION, payload: { car },
});

export const saveCar = car => {
  return async dispatch => {
    dispatch(createSaveCarRequestAction(car));
    await _replaceCar(car);
    dispatch(refreshCars());
  };
}

export const createDeleteCarRequestAction = carId => ({
  type: DELETE_CAR_REQUEST_ACTION, payload: { carId },
});

export const deleteCar = carId => {
  return async dispatch => {
    dispatch(createDeleteCarRequestAction(carId));
    await _removeCar(carId);
    dispatch(refreshCars());
  };
}

export const createEditCarAction = carId => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

export const createSortCarsAction = (column) => ({
  type: SORT_CARS_ACTION, payload: { column },
});