import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authors from './authors';
import books from './books';
import genre from './genre';

const rootReducer = combineReducers(
  {routing: routerReducer, authors, books, genre}
);

export default rootReducer;
