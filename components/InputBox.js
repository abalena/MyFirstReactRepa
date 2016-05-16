import React from "react";
export default class InputBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text : ""
    }
  }
  handleInputChange(event){
    console.log("I've changed!", event.target.value)
    this.setState({text: event.target.value})
  }
  render(){
    return(
      <div>
        <input type='text' onChange={this.handleInputChange.bind(this)}></input>
        <div>{this.state.text}</div>
      </div>
    )
  }
}
