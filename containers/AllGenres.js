import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
class AllGenres extends React.Component {
  componentWillMount(){
    this.props.loadAllBooks()
  }
  render(){
    const listOfGenres = this.props.books.map(book=>
      (
        <div>
          <li>
            {book.genre}
          </li>
        </div>
      )
  )
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
export default connect(mapStateToProps, {loadAllBooks})(AllGenres)
