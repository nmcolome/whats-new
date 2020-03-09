import React from 'react';
import './NewsArticle.css';

function NewsArticle({id, headline, img, description, url}) {
  return (
    <div className={`article-card article-${id}`}>
      <div>
        <img className="article-img" src={img} alt="image related to the new"/>
      </div>
      <h2>{headline}</h2>
      <p>{description}</p>
      <a href={url}>Link to article</a>
    </div>
  )
}

export default NewsArticle;