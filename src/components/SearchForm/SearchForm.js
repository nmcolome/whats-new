import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <fieldset className="form-container">
      <input className="search-input" type="text" placeholder="Search for news article here."/>
      <button className="search-submit">Search Now</button>
    </fieldset>
  )
}

export default SearchForm;