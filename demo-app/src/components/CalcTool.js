import { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const CalcTool = () => {

  const [ numInput, setNumInput ] = useState(0);

  // result <- state data
  // add, subtract <- actions

  return (
    <>
      <ToolHeader headerText="Calc Tool" />
      <div>
        Result: {result}
      </div>
      <form>
        <label>
          <input type="number" value={numInput}
            onChange={e => setNumInput(parseFloat(e.target.value))} />
        </label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
        </fieldset>
      </form>
    </>
  );


}