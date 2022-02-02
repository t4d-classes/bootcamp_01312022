import { useState } from 'react';
import PropTypes from 'prop-types';

import "./CarForm.css";

const getInitialCarForm = () => ({
  make: '', model: '', year: 1900, color: '', price: 0,
});

export const CarForm = (props) => {

  const [ carForm, setCarForm ] = useState(getInitialCarForm() /* initial value of the state */);

  const change = e => {

    setCarForm({
      // name: carForm.name,
      // hexcode: carForm.hexcode,
      ...carForm, // copy the properties from the original carForm into the new one
      // computed property
      [ e.target.name ]: e.target.type === 'number'
        ? parseInt(e.target.value, 10) : e.target.value
    });

  };

  const submitCar = () => {

    // invoked the addCar function passing it the carForm
    props.onSubmitCar({ ...carForm });

    // sets the form back to blank
    setCarForm(getInitialCarForm());

  };

  console.log(carForm);


  return (
    <form>

      <label>
        Make:
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label>

      <label>
        Model:
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label>

      <label>
        Year:
        <input type="number" name="year" value={carForm.year} onChange={change} />
      </label>

      <label>
        Color:
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label>

      <label>
        Price:
        <input type="number" name="price" value={carForm.price} onChange={change} />
      </label>

      <button type="button" onClick={submitCar}>{props.buttonText}</button>

    </form>
  );


};

CarForm.defaultProps = {
  buttonText: "Submit Car",
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};
