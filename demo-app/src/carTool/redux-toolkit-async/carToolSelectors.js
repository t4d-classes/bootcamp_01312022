import { createSelector } from 'reselect';

export const selectCars = state => state.cars;
export const selectCarsSort = state => state.carsSort;
export const selectEditCarId = state => state.editCarId;

export const selectSortedCars = createSelector(
  selectCars,
  selectCarsSort,
  (cars, carsSort) =>
    [ ...cars ].sort((a,b) => {

        if (a[carsSort.column] < b[carsSort.column]) {
          return carsSort.direction === 'asc' ? -1 : 1;
        } else if (a[carsSort.column] > b[carsSort.column]) {
          return carsSort.direction === 'asc' ? 1 : -1;
        } else {
          return 0;
        }

    }));


