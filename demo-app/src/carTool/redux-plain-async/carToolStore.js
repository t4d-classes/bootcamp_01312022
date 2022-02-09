import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { carToolReducer } from './carToolReducers';

export const carToolStore = createStore(
  carToolReducer, composeWithDevTools(applyMiddleware(thunk)));