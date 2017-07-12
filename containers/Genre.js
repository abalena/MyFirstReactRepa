import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"

export default class Genre extends React.Component {
  componentDidMount(){
    this.props.loadAllBooks()
  }
  render(){
    const listOfBooksByGenre = this.props.books.map(book=>
      ( (book.genre) && <div>{book.title}</div> )
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
