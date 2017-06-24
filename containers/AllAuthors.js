import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {loadAllAuthors} from "../actions/authors"
import {loadAllBooks} from "../actions/books"
class AllAuthors extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOpened: false};
  }

  toggleState(){
    this.setState({isOpened: !this.state.isOpened})
  }

  componentWillMount(){
    this.props.loadAllAuthors();
  }

  render(){
    //console.log("isOpened", this.state.isOpened);
    const listOfAuthors = this.props.authors.map((author)=>
      <div>
        <ul>
          <Link to = {`/author/${author.fullName}`} >{author.fullName} </Link>
        </ul>
      </div>
    )
    
   let dropdownText;
   if(this.state.isOpened){
     dropdownText = <div>{listOfAuthors}</div>
   }

   return(
     <div onClick = {this.toggleState.bind(this)}>
       Authors:
       {dropdownText}
     </div>
   )
 }

}
function mapStateToProps(state){
  return {
    authors: state.authors.authors
  };
}
export default connect(mapStateToProps, {loadAllAuthors})(AllAuthors)
