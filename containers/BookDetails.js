import React from "react";
import {connect} from "react-redux";
import {loadBookDetail} from "../actions/books";
export default class BookDetails extends React.Component {
  componentWillMount(){
    const bookTitle = this.props.routeParams.name;
    this.props.loadBookDetail(bookTitle)
  }
  render() {
    return (
      <div>{this.props.BookDetails.summary}</div>
    );
  }
}
function mapStateToProps(state){
  return{
    BookDetails : state.books.book
  }
}
export default connect(mapStateToProps,{loadBookDetail})(BookDetails)
