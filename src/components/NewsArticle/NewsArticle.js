import React from 'react';
import './NewsArticle.css';

function NewsArticle({id, headline, img, description, url}) {
  return (
    <div className={`article-card article-${id}`}>
      <div>
        <img className="article-img" src={img} alt="image related to the new"/>
      </div>
      <h2 className="article-headline">{headline}</h2>
      <p className="article-description">{description}</p>
      <div className="article-link">
        <a href={url}>Link to article</a>
      </div>
    </div>
  )
}

export default NewsArticle;