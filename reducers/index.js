import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authors from './authors';

const rootReducer = combineReducers(
  {routing: routerReducer, authors}
);

export default rootReducer;
