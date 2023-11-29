import React from "react";
import './article.css';
import PropTypes from 'prop-types';
const Article = ({ imgUrl, date, text }) => (
  <div className="blog-container_article">
    <div className="blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p id="more">Read Full Article</p>
    </div>
  </div>
);
Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;