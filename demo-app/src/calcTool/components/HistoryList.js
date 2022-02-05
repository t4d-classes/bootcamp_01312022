import PropTypes from 'prop-types';
import { memo } from 'react';

import { historyPropType } from '../calcToolPropTypes';

export const HistoryList = memo(({
  history,
  onDeleteHistoryEntry: deleteHistoryEntry }) => {

  return (
    <ul>
      {history.map(entry => <li key={entry.id}>
        {entry.opName} { entry.opValue}
        <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>
          X
        </button>
      </li>)}
    </ul>
  );

});

HistoryList.defaultProps = {
  history: [],
};

HistoryList.propTypes = {
  history: historyPropType,
  onDeleteHistoryEntry: PropTypes.func.isRequired,
};