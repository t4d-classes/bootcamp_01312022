import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { calcToolReducer } from './calcToolReducers';

export const calcToolStore = createStore(
  calcToolReducer, composeWithDevTools());