import libraryData from "../data/library.json"
console.log(libraryData)
import {GET_ALL_AUTHORS_LIST, GET_AUTHOR_DETAIL} from "../actions/authors.js"
const initialState = {
  authors: [],
  author: {}
};

export default function authors(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_AUTHORS_LIST : return Object.assign({}, state, {authors : libraryData.authors});
    case GET_AUTHOR_DETAIL :
      const author = libraryData.authors.find(function(author){
        return (author.fullName === action.name)
      })
      return Object.assign({}, state, {author})
    default:
    return state;
  }
}
