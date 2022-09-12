import React from "react";
import Rating from "./Ratings";
const Display = ({ selectedProduct }) => {
  return (
    <div className="display">
      {selectedProduct && (
        <div style={{ background: "#fff" }}>
          <h1>${selectedProduct.price}</h1>
          <p>{selectedProduct.description}</p>
          <br />
          <Rating
            rate={selectedProduct.rating.rate}
            num={selectedProduct.rating.count}
          />
        </div>
      )}
    </div>
  );
};

export default Display;