import { useState } from 'react';

export const ColorForm = () => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  } /* initial value of the state */);

  const change = e => {

    setColorForm({
      // name: colorForm.name,
      // hexcode: colorForm.hexcode,
      ...colorForm, // copy the properties from the original colorForm into the new one
      // computed property
      [ e.target.name ]: e.target.value
    })

  };

  console.log(colorForm);

  return (
    <form>

      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>

      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>

      <button type="button">Add Color</button>

    </form>
  );


};


// <label htmlFor="hexcode-input">
// Hexcode:
// </label>
// <input type="text" id="hexcode-input" />