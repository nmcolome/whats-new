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
      local,
      value: '',
    };
    this.data = {
      local,
      entertainment,
      health,
      science,
      technology
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterNews = this.filterNews.bind(this);
  }

  handleClick(value) {
    this.setState({local: this.data[value]})
  }

  handleSubmit(value) {
    console.log(Object.values(this.state.local))
    this.setState({local: this.filterNews(value)})
  }

  filterNews(string) {
    const data = this.state.local;
    const matches = []
    data.forEach((row) => { 
      if (row["headline"].toLowerCase().includes(string) || row["description"].toLowerCase().includes(string)) {
        return matches.push(row)
      }
    });
    return matches
  }

  render () {
    return (
      <div className="app">
        <Menu
          titles={Object.keys(this.data)}
          handleClick={this.handleClick}
        />
        <div>
          <SearchForm
            handleSubmit={this.handleSubmit}
          />
          <NewsContainer
            data={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
