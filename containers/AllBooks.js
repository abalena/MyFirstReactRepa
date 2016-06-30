import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
import {loadAllAuthors} from "../actions/authors.js"
import {loadAuthorDetail} from "../actions/authors.js"
class AllBooks extends React.Component {
  componentWillMount(){
    this.props.loadAllBooks()
  }
  render(){
    const listOfBooks = this.props.books.map(book=>
      (
        <ul>
           <Link to={`/book/${book.title}`}>{book.title}</Link>
           <td> - </td>
           <Link to ={`/author/${book.author}`}>{book.author}</Link>
           <td> - </td>
           <Link to={`/genres`}>{book.genre}</Link>
         </ul>
        )
      )
   return(
    <ul>
      {listOfBooks}
    </ul>
    )
  }
}
function mapStateToProps(state){
  return{
    books : state.books.books
  };
}
export default connect(mapStateToProps, {loadAllBooks})(AllBooks)
