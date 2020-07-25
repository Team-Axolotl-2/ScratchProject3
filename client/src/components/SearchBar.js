import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProgressPlugin } from 'webpack';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: '',
  //   };
  // }
  // handleChange(event) {
  //   const output = {
  //     search: event.target.value,
  //   };
  //   this.setState = output;
  //}
  render() {
    return (
      <div>
        Search Bar And Add Component
        {/* <input
          name="company"
          type="text"
          defaultValue={this.state.search}
          onChange={(event) => this.handleChange(event)}
        ></input>
        <button onclick={props.onSearchClick}>Add Company</button> */}
      </div>
    );
  }
}

export default SearchBar;
