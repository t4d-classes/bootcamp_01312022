import { useCalcTool } from '../hooks/useCalcTool';

import { ToolHeader } from './ToolHeader';
import { CalcForm } from './CalcForm';
import { HistoryList } from './HistoryList';

export const CalcTool = () => {

  const {
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry,
    result, history, errorMessage } = useCalcTool();

  return (
    <>
      <ToolHeader headerText="Calc Tool" />
      {errorMessage && <div>
        Error: {errorMessage}
      </div>}
      <div>
        Result: {result}
      </div>
      <CalcForm onAdd={add} onSubtract={subtract}
        onMultiply={multiply} onDivide={divide}
        onClear={clear} />
      <HistoryList history={history}
        onDeleteHistoryEntry={deleteHistoryEntry} />
    </>
  );


}