import { createSelector } from 'reselect';

import { mathOperations } from '../calcToolConstants';

export const selectHistory = state => state.history;

export const selectErrorMessage = state => state.errorMessage;

export const selectResult = createSelector(selectHistory, history =>
  history.reduce((result, entry) =>
    mathOperations.get(entry.opName)(result, entry.opValue), 0));


