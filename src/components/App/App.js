import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    };
    this.data = {
      local,
      entertainment,
      health,
      science,
      technology
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value) {
    this.setState({local: this.data[value]})
  }

  render () {
    return (
      <div className="app">
        <Menu
          titles={Object.keys(this.data)}
          handleClick={this.handleClick}
        />
        <div>
          <SearchForm />
          <NewsContainer
            data={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
