import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllAuthors} from "../actions/authors"
class AllAuthors extends React.Component{
  componentWillMount(){
    this.props.loadAllAuthors()
  }
  render(){
    const listOfAuthors = this.props.authors.map(function(author){
      return(
        <div>
          <li>
            <Link to = {`author/${author.fullName}`}>{author.fullName}</Link>
          </li>
        </div>
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
