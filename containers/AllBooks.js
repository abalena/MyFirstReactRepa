import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllBooks} from "../actions/books.js"
class AllBooks extends React.Component {
  componentWillMount(){
    this.props.loadAllBooks()
  }
  render(){
    const listOfBooks = this.props.books.map(function(book){
      return(
        <li>
          <Link to={"/book/" + book.title}>{book.title}</Link>
        </li>
    )
  })
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
