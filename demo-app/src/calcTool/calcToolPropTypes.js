import PropTypes from 'prop-types';

import { mathOperations } from './calcToolConstants';

export const historyEntryPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  opName: PropTypes.oneOf(Array.from(mathOperations.keys())).isRequired,
  opValue: PropTypes.number.isRequired,
});

export const historyPropType = PropTypes.arrayOf(historyEntryPropType);

