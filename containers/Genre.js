import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
class Genre extends React.Component {

  componentWillMount(){
    this.props.loadAllBooks()
  }

  render(){
    const listOfBooksByGenres = this.props.books.map(function(book){
      if(book.genre == "dystopian")
    return  (
        <div>
          {book.title}
        </div>
      )}
  )

    return(
          <div>{listOfBooksByGenres}</div>
    )
  }
}
function mapStateToProps(state){
  return{
    books : state.books.books
  };
}
export default connect(mapStateToProps, {loadAllBooks})(Genre)
