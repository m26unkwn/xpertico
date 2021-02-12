import React from "react";
import "./card.css";
const spanArr = [
  // "Tax Consultant",
  "Cardiaologist",
  "Advocate",
  "Cardiaologist",
  "Advocate",
  // "Hair Specialist",
];
function Card({ data }) {
  return (
    <div className="result__card">
      <div className="card__info">
        <div className="card__left">
          <div className="card__avatar">
            <img src={data.pic} alt="profile_image" />
          </div>
          <p>36 Votes</p>
          <h3>95 Feedback</h3>
        </div>
        <div className="card__right">
          <h2>{data.name}</h2>
          <div>
            <ul>
              <li>{data.category}</li>
              <li>{data.subcategory}</li>
              <li>{data.email}</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="card__price">$500 onwards</p>
      <div className="card__tags">
        {spanArr.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Card;
