
import "./card.css";
import PropTypes from 'prop-types';
function Card({ link, img, title, description }) {
  return (
    <div className="card">
      <img src={img} className="card-img" alt="card_1" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-info">{description}</p>
        <a href={link}>
          <button type="button">Learn more</button>
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
