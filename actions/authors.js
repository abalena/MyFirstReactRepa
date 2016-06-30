export const GET_ALL_AUTHORS_LIST = 'GET_ALL_AUTHORS_LIST';
export function loadAllAuthors () {
  return {type : GET_ALL_AUTHORS_LIST}
}
export const GET_AUTHOR_DETAIL = 'GET_AUTHOR_DETAIL';
export function loadAuthorDetail(name){
  return {type:GET_AUTHOR_DETAIL, name}
}
