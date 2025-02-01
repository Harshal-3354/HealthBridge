import React from 'react';
import './LatestNews.css'; // Optional: Add styling here

const LatestNews = ({ articles }) => {
  return (
    <section className="latest-news">
      <h2 className="latest-news__title">Read Our Latest News</h2>
      <div className="latest-news__grid">
        {articles.map((article, index) => (
          <div className="latest-news__card" key={index}>
            <img
              src={article.image}
              alt={article.title}
              className="latest-news__image"
            />
            <div className="latest-news__content">
              <p className="latest-news__date">{article.date}</p>
              <h3 className="latest-news__headline">{article.title}</h3>
              <p className="latest-news__author">By {article.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
