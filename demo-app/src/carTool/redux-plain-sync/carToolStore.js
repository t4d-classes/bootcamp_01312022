import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { carToolReducer } from './carToolReducers';

export const carToolStore = createStore(
  carToolReducer, composeWithDevTools());