import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>
          The Yelp + Maps Tool
        </h1>
        <form>
          <label>
            What do you want to eat or do? 
            <input type="text" name="name"/>
          </label>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
}

export default HelloWorld



