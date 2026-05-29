import React from "react";
import "./Review.css";

function Review({ text, source, sourceLink }) {
  return (
    <a href={sourceLink} target="_blank">
      <div className="reviewCard">
        <p className="reviewText">"{text}"</p>
        <p className="reviewSource">- {source}</p>
      </div>
    </a>
  );
}

export default Review;
