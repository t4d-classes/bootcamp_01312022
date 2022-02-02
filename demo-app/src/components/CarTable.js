import PropTypes from 'prop-types';

import { carsPropType } from '../propTypes/car';
import { SortColHeader } from './SortColHeader';
import { CarViewRow } from './CarViewRow';

const cols = [
  { field: 'id', label: 'Id' },
  { field: 'make', label: 'Make' },
  { field: 'model', label: 'Model' },
  { field: 'year', label: 'Year' },
  { field: 'color', label: 'Color' },
  { field: 'price', label: 'Price' },
]

export const CarTable = ({
  cars, carsSort,
  onSortCars: sortCars,
  onDeleteCar: deleteCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          {cols.map( (col, i) => <SortColHeader key={i} col={col}
            sortInfo={carsSort} onSort={sortCars} />)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          <CarViewRow key={car.id} car={car}
            onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

}

CarTable.defaultProps = {
  cars: [],
  carsSort: {
    column: 'id', direction: 'asc',
  },
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  carsSort: PropTypes.shape({
    column: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }).isRequired,
  onSortCars: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
