import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <center>
        <div className="ui action input" style={{ marginTop: 16 }}>
          <input
            type="text"
            placeholder="Search images..."
            value={this.state.term}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
          <button className="ui button">Search</button>
        </div>
      </center>
    );
  }
}
export default SearchBar;
