import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Don't let this run...Prettier
//import { ProgressPlugin } from 'webpack';



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange(event) {
    console.log('Looking for this.props:  ', this.props);
    const output = {
      search: event.target.value,
    };
    this.setState = output;
  }

  render() {
    return (
      <div>
        Search Bar And Add Component
        <form onSubmit={(e) => this.props.onSearchClick(e)}>
          <label>
            <input
              name="company"
              type="text"
              defaultValue={this.state.search}
              onChange={(event) => this.handleChange(event)}
            ></input>
          </label>
          {/* <button onClick={(e) => this.props.onSearchClick(e)}>
          Add Company
        </button> */}
          <input type="submit" value="Add Company"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
