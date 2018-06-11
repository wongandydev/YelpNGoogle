import React from "react"
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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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



