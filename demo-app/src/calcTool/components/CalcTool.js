import PropTypes from 'prop-types';

import { useCalcTool } from '../hooks/useCalcTool';

import { ToolHeader } from '../../shared/components';
import { CalcForm } from './CalcForm';
import { HistoryList } from './HistoryList';

export const CalcTool = ({ kindOfStore }) => {

  const {
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry,
    result, history, errorMessage } = useCalcTool(kindOfStore);

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

CalcTool.defaultProps = {
  kindOfStore: 'plain',
};

CalcTool.propTypes = {
  kindOfStore: PropTypes.string.isRequired,
};