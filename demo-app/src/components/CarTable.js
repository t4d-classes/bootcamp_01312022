
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
  cars, carsSort, onSortCars
}) => {

  return (
    <table>
      <thead>
        <tr>
          {cols.map(col => <SortColHeader col={col}
            sortInfo={carsSort} onSort={onSortCars} />)}
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );

}
