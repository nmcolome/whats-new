import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from '../NewsArticle/NewsArticle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
