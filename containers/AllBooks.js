import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"

export default class AllBooks extends React.Component {
  componentDidMount(){
    this.props.loadAllBooks()
  }
  render(){
    const listOfBooks = this.props.books.map(book=>
      (
        <div>
          <span>
           <Link to={`/book/${book.title}`}>{book.title}</Link>
           <td> - </td>
           <Link to ={`/author/${book.author}`}>{book.author}</Link>
           <td> - </td>
           <Link to={`/genre/${book.genre}`}>{book.genre}</Link>
         </span>
       </div>
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
