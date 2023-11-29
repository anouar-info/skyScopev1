import React from "react";
import PropTypes from 'prop-types';
import Card from '../Card';
import "./astronomySlide.css"
function AstronomySlide({title, description, cards}) {

  return (
    <div>
      <div className="astronomy section__margin" id="astronomy">
        <div className="astronomy-header">
          <div>
            <h1 className="title gradient__text">{title}</h1>
          </div>
          <div>
            <p className="sub_title simple__text">
              {description}
            </p>
          </div>
        </div>
        <div className="astronomy-cards">
          {cards.map((card, index) => (
            <Card
              key={index}
              link={`/Astronomy#${title}`}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

AstronomySlide.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards:  PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};
export default AstronomySlide;
