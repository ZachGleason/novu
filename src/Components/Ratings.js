import React from "react";
import { BsStarFill } from "react-icons/bs";

function Rating({ rate, num }) {
  let ratingArr = [...Array(Math.ceil(rate)).keys()];

  return (
    <div className="rating-container">
      {ratingArr.map((item) => (
        <BsStarFill style={{ color: "gold" }} />
      ))}
      <span style={{ marginLeft: "20px" }}>({num})</span>
    </div>
  );
}

export default Rating;