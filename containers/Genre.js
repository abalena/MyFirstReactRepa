import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
class Genre extends React.Component {
  componentDidMount(){
    const booksByGenre = this.props.routeParams.name;
    this.props.loadAllBooks(booksByGenre)
  }
  render(){
    const listOfBooksByGenre = this.props.books.map(book=>
      ( book.genre && <div>{book.title}</div> )
  )
    return(
          <div>{listOfBooksByGenre}</div>
    )
  }
}
function mapStateToProps(state){
  return{
    books : state.books.books
  };
}
export default connect(mapStateToProps, {loadAllBooks})(Genre)
