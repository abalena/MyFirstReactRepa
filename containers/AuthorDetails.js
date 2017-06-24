import React from "react";
import {connect} from "react-redux";
import {loadAuthorDetail} from "../actions/authors";
export default class AuthorDetails extends React.Component {
 componentWillMount(){
   const authorName = this.props.routeParams.name;
   this.props.loadAuthorDetail(authorName)
 }
  render() {
    return (
      <div>
        <div>{this.props.authorDetails.fullName}</div>
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
