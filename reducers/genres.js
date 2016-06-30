import libraryData from "../data/library.json"
import {GET_ALL_BOOKS_LIST} from "../actions/books.js"
const initialState = {
  genres: [],
  genre: {}
};

export default function genres(state = initialState, action){
  switch (action.type){
    case GET_ALL_BOOKS_LIST : return Object.assign({}, state, {genres : libraryData.books});
    default : return state;
  }
}
