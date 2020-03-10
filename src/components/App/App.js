import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      local: {},
      value: '',
      isLoading: false,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterNews = this.filterNews.bind(this);
  }

  handleClick(value) {
    this.setState({local: this.state.data[value]})
  }

  handleSubmit(value) {
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

  componentDidMount() {
    this.setState({isLoading: true})

    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => this.setState({data: data, isLoading: false, local: data["local"]}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render () {
    const { data, local, isLoading, error } = this.state

    if (error) {
      return <h1>{error.message}</h1>;
    }

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="app">
        <Menu
          titles={Object.keys(data)}
          handleClick={this.handleClick}
        />
        <div>
          <SearchForm
            handleSubmit={this.handleSubmit}
          />
          <NewsContainer
            data={local}
          />
        </div>
      </div>
    );
  }
}

export default App;
