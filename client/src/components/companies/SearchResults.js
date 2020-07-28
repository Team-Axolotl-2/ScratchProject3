// Create the list of companies
import React, { Component , useState} from "react";
import { Link } from "react-router-dom";

// class SearchResults extends Component () {

//   constructor(props) {
//     super(props);
//     this.state = {
//       search: '',
//     };
//   }

//   // handleChange(event) {
//   //   console.log('Looking for this.props:  ', this.props);
//   //   const output = {
//   //     search: event.target.value,
//   //   };
//   //   this.setState = output;
//   // }
//   const toRender = [];
//   this.props.searchResults.bestMatches.forEach ((elem, i) => {
//     console.log('=============== ', props);
//     toRender.push(
//     <div key={i}>
//       <span> 
//         <button 
//           type="submit" 
//           name={elem['1. symbol']} 
//           onClick={() => this.props.onSearchSubmit(elem['1. symbol'])} >
//           Select
//           </button>
//         <strong>  {elem['2. name']}:</strong> {elem['1. symbol']} - {elem['3. type']}
//       </span>
//     </div> )
//   });

//   render() {
//     return (
//       <div>
//         <h1> Search results: </h1>
//         {toRender}
//       </div>
//       )
// }


const SearchResults = (props) => {
  
  const toRender = [];
  props.searchResults.bestMatches.forEach ((elem, i) => {
    console.log('=============== ', props);
    toRender.push(
    <div key={i}>
      <span> 
        <button 
          type="submit" 
          name={elem['1. symbol']} 
          onClick={() => props.SearchSelector(elem['1. symbol'])} >
          Select
          </button>
        <strong>  {elem['2. name']}:</strong> {elem['1. symbol']} - {elem['3. type']}
      </span>
    </div> )
  });

  return (
    <div>
    <h1> Search results: </h1>
    {toRender}
    </div>
  )

}


export default SearchResults;
