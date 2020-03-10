import React from 'react';
import './NewsArticle.css';

function NewsArticle({id, headline, img, description, url}) {
  const css = {backgroundImage: `url(${img})`}
  return (
    <div className={`article-card article-${id}`}>
      <div className="img-container" style={css}></div>
      <div className="content">
        <h2 className="article-headline">{headline}</h2>
        <p className="article-description">{description}</p>
      </div>
      <div className="article-link">
        <a href={url}>Link to article</a>
      </div>
    </div>
  )
}

export default NewsArticle;