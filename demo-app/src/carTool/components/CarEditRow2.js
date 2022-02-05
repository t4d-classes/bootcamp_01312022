import PropTypes from 'prop-types';

import { carPropType } from '../carToolPropTypes';
import { useForm } from '../../shared/hooks/useForm';

const getEditControlId = (cols, field) => {
  return cols.find(col => {
    return col.field === field;
  }).editControlId;

};

export const CarEditRow = ({
  car,
  cols,
  onCancelCar: cancelCar,
  onSaveCar,
}) => {

  const [ carForm, change ] = useForm({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };  

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" name="make"
          id={getEditControlId(cols, 'make')}
          value={carForm.make} onChange={change} />
      </td>
      <td>
        <input type="text" name="model"
          id={getEditControlId(cols, 'model')}
          value={carForm.model} onChange={change} />
      </td>
      <td>
        <input type="number" name="year"
          id={getEditControlId(cols, 'year')}
          value={carForm.year} onChange={change} />
      </td>
      <td>
        <input type="text" name="color"
          id={getEditControlId(cols, 'color')}
          value={carForm.color} onChange={change} />
      </td>
      <td>
        <input type="number" name="price"
          id={getEditControlId(cols, 'price')}
          value={carForm.price} onChange={change} />
      </td>
      <td>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </td>
    </tr>    
  );


};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  cols: PropTypes.array.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};