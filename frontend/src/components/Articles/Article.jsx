import React from "react";
import "./Article.scss";
import PropTypes from "prop-types";

function Article({ title, link, date, image }) {
  return (
    <div className="actu-container">
      <a
        href={link}
        className="linkArticle"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <h3 className="dateArticle">{date}</h3>
      <img src={image} alt={title} className="imageArticle" />
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Article;
