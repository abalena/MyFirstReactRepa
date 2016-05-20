import libraryData from "../data/library.json"
import {GET_ALL_GENRES_LIST} from "../actions/books.js"
const initialState = {
  genres: [],
  genre: {}
};

export default function genres(state = initialState, action){
  switch (action.type){
    case GET_ALL_GENRES_LIST : return Object.assign({}, state, {genre : libraryData.books});

    return Object.assign({}, state, {genre})
    default:
    return state;
  }
}