export const GET_ALL_BOOKS_LIST = 'GET_ALL_BOOKS_LIST';
export function loadAllBooks(){
  return {type : GET_ALL_BOOKS_LIST}
}
export const GET_BOOK_DETAIL = 'GET_BOOK_DETAIL';
export function loadBookDetail(name){
  return {type : GET_BOOK_DETAIL, }
}
