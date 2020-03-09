import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

function NewsContainer({data}) {
  const articles = data.map((row) => <NewsArticle key={row.id} {...row} /> )
  return (
    <div className="cardContainer">
      {articles}
    </div>
  )
}

export default NewsContainer;