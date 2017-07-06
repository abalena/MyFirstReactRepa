import React from "react";
import {Link} from "react-router"
import {connect} from "react-redux";
import {loadBookDetail} from "../actions/books";
export default class BookDetails extends React.Component {

  componentDidMount(){
    const bookTitle = this.props.routeParams.name;
    this.props.loadBookDetail(bookTitle)
  }

  render() {
    return (
      <div>
        <div>Title:{this.props.BookDetails.title}</div>
        <div>
          Author:<Link to={`/author/${this.props.BookDetails.author}`}>{this.props.BookDetails.author}</Link>
        </div>
        <div>
          Genre:{this.props.BookDetails.genre}
        </div>
        <div>{this.props.BookDetails.summary}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    BookDetails : state.books.book
  }
}
export default connect(mapStateToProps,{loadBookDetail})(BookDetails)
