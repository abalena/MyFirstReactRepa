import React from "react"
import {connect} from "react-redux"
import {loadAllAuthors} from "../actions/authors"
import {Link} from "react-router"
 class AllAuthors extends React.Component{
   componentWillMount(){
     this.props.loadAllAuthors()
   }
  render(){
    const listOfAuthors = this.props.authors.map(function(author){
      return(
        <li>
          <Link to={"/author/"+author.fullName}>{author.fullName}</Link>
        </li>
      )
    })
    return(
      <ul>
        {listOfAuthors}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return {
    authors: state.authors.authors
  };
}
export default connect(mapStateToProps, {loadAllAuthors})(AllAuthors)
