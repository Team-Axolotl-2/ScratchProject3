// Create the list of companies
import React, { Component , useState} from "react";
import { Link } from "react-router-dom";


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
          onClick={() => props.SearchSelector(elem['1. symbol'], props.email)} > 
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
