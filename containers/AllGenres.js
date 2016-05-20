import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
import {loadAllGenres} from "../actions/genres.js"
class AllGenres extends React.Component {
  componentWillMount(){
    this.props.loadAllGenres()
  }
  render(){
    const listOfGenres = this.props.books.map(function(book){
      return(
        <span> {book.genre} </span>
      )
    })
    return(
      <ul>
        {listOfGenres}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return{
    books : state.books.books
  };
}
export default connect(mapStateToProps, {loadAllGenres})(AllGenres)
