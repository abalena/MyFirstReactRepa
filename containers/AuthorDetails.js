import React from "react";
import {connect} from "react-redux";
import {loadAuthorDetail} from "../actions/authors";
class AuthorDetails extends React.Component {
 componentDidMount(){
   const authorName = this.props.routeParams.name;
   this.props.loadAuthorDetail(authorName)
}
  render() {
    return (
      <div>
        <h3>{this.props.authorDetails.fullName}</h3>
        <div>{this.props.authorDetails.biography}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    authorDetails: state.authors.author
  }
}
export default connect(mapStateToProps, {loadAuthorDetail})(AuthorDetails)
