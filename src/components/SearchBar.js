import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(value){
    this.setState({
      term: value
    });
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
          <button className="ui button" onClick={
            async () => {
              await this.props.searchData(this.state.term);
            }
          }>Search</button>
        </div>
      </center>
    );
  }
}
export default SearchBar;
