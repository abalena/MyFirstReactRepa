import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authors from './authors';
import books from './books';

const rootReducer = combineReducers(
  {routing: routerReducer, authors, books}
);

export default rootReducer;
