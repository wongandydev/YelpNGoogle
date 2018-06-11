import React from "react"
import $ from 'jquery';
// import PropTypes from "prop-types"

class HelloWorld extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleSearchBar = this.handleSearchBar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearchBar(event){
    this.setState({value: event.target.value})
  }

handleSubmit(event){
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
    $.ajax({
        url: "/apiCall",
        data: {"zip_code": this.state.value},
        type: "GET",
        success(result) {
            alert(result);
        }, error(xhr, status, error) {
            alert(status);
        }
    });
  }

  render() {
    return (
      <div>
        <h1>
          The Yelp + Maps Tool
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            What do you want to eat or do? 
            <br></br>
            <input type="text" value={this.state.value} onChange={this.handleSearchBar} />
          </label>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default HelloWorld



