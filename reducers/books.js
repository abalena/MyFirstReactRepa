import libraryData from "../data/library.json"
import {GET_ALL_BOOKS_LIST, GET_BOOK_DETAIL} from "../actions/books.js"
const initialState = {
  books : [],
  book : {}
};

export default function books(state = initialState, action){
  switch (action.type){
    case GET_ALL_BOOKS_LIST : return Object.assign({}, state, {books : libraryData.books});
    case GET_BOOK_DETAIL :
    const book = libraryData.books.find(book  =>
      (book.title === action.name)
    )
    return Object.assign({}, state, {book})
    default : return state;
  }
}
