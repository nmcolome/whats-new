import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.getText = this.getText.bind(this)
  }

  onInputChange(e) {
    this.setState({value: e.target.value})
  }

  getText(event) {
    this.props.handleSubmit(this.state.value)
    event.preventDefault();
    this.setState({value: ''})
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.getText}>
        <input className="search-input" type="text" placeholder="Search for news article here." value={this.state.value} onChange={this.onInputChange}/>
        <input className="search-submit" type="submit" value="Search Now"/>
      </form>
    )
  }
}

export default SearchForm;