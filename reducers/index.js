import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authors from './authors';

const rootReducer = combineReducers(
  {routing: routerReducer, authors}
);

export default rootReducer;

const data = {authors: [], books: [] }

export default {
books : [
  {
    title : '1984',
    author : 'George Orwell',
    summary :'...',
    genre : 'dystopian'
  }

],
authors : [
  {
  fullName : 'George Orwell',
  biography : ' Eric Arthur Blair, better known by his pen name George Orwell, was an English author and journalist.'
  }
]
}
