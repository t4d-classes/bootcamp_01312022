import PropTypes from 'prop-types';
import { forwardRef, useRef, useImperativeHandle } from 'react';

import { useForm } from '../../shared/hooks/useForm';

import "./CarForm.css";



export const CarForm = forwardRef((props, ref) => {

  const makeControl = useRef();

  useImperativeHandle(ref, () => {

    return {
      setFocus: () => {
        if (makeControl.current) {
          makeControl.current.focus();
        }
      },
    }

  })

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    resetCarForm();
  };

  console.dir(submitCar);

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make" ref={makeControl}
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>
        {props.buttonText}
      </button>
    </form>
  );


});

CarForm.defaultProps = {
  buttonText: "Submit Car",
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};


// function bindMe(fn, valueOfThis, ...outerArgs) {

//   return function(...innerArgs) {
//     fn.call(valueOfThis, ...outerArgs, ...innerArgs);
//   };

// }
