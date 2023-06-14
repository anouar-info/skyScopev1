import React from "react";
import "./card.css";

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

export default Card;
