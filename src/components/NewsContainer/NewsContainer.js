import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

function NewsContainer({data}) {
  const news = Object.values(data)[0]
  const articles = news.map((row) => <NewsArticle key={row.id} {...row} /> )
  return (
    <div className="cardContainer">
      {articles}
    </div>
  )
}

export default NewsContainer;