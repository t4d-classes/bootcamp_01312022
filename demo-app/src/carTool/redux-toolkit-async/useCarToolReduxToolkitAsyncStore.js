import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useEffect } from 'react';

import {
  selectSortedCars,
  selectCarsSort,
  selectEditCarId,
} from './carToolSelectors';

import {
  refreshCars,
  addCar,
  saveCar,
  deleteCar,
} from './slices/carsSlice';

import {
  editCar,
  cancelCar
} from './slices/editCarIdSlice';

import {
  sortCars,
} from './slices/carsSortSlice';

export const useCarToolReduxToolkitAsyncStore = () => {

  const cars = useSelector(selectSortedCars);
  const carsSort = useSelector(selectCarsSort);
  const editCarId = useSelector(selectEditCarId);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshCars,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
    sortCars,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshCars();
  }, [actions])

  return { ...actions, cars, carsSort, editCarId, };
};