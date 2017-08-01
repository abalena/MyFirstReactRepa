import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllAuthors} from "../actions/authors"
export default class AllAuthors extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOpened: false};
    this.toggleMenu = () => this.toggleState();
  }
  componentDidMount(){
    this.props.loadAllAuthors()
  }

  toggleState(){
  this.setState(function(prevState, props){
    return {isOpened:!this.state.isOpened}
  });
}
  render(){
    const listOfAuthors = this.props.authors.map(author=>
      <div>
        <ul>
          <Link to = {`/author/${author.fullName}`} >{author.fullName} </Link>
        </ul>
      </div>
    )
   const dropdownText = this.state.isOpened ? <div>{listOfAuthors}</div> : <div> </div>;
   return(
     <div>
       <div onClick = {this.toggleMenu}>
       <h1>Authors:</h1>
       (Click to open/close list of authors)
       {dropdownText}
     </div>
   </div>
   )
 }

}

function mapStateToProps (state) {
  return  {authors: state.authors.authors};
}
export default connect(mapStateToProps, {loadAllAuthors})(AllAuthors)
