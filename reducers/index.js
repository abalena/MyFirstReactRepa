import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authors from './authors';
import books from './books';
import genres from './genres';

const rootReducer = combineReducers(
  {routing: routerReducer, authors, books, genres}
);

export default rootReducer;
