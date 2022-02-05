import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

import { carPropType } from '../carToolPropTypes';
import { useForm } from '../../shared/hooks/useForm';

export const CarEditRow = ({
  car,
  onCancelCar: cancelCar,
  onSaveCar,
}) => {

  const makeControl = useRef();

  useEffect(() => {

    if (makeControl.current) {
      makeControl.current.focus();
    }

  }, []);

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
      <td><input type="text" name="make" ref={makeControl}
        value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model"
        value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year"
        value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color"
        value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price"
        value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={cancelCar}>Cancel</button>
      </td>
    </tr>    
  );


};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};