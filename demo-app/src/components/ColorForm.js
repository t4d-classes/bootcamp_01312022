import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

import "./ColorForm.css";

export const ColorForm = (props) => {

  const [ colorForm, change, resetCarForm ] = useForm({
    name: '', hexcode: '',
  });

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    resetCarForm();
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired,
};
