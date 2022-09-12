import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { FaChevronCircleLeft } from "react-icons/fa";

const Products = ({ productSelectHandler, selectedProduct }) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const [Products, setProducts] = useState([]);
  const filter = Products.slice(0, 3);

  const handleRotate = () => setRotateChevron(!rotateChevron);
//   const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="Products">
      {filter.map((product, idx) => {
        return (
          <div
            className="product_data"
            onClick={() => productSelectHandler(product.id)}
          >
            <img
              src={product.image}
              alt="product_image"
              className="product_image"
            ></img>
            <p className="product-title" key={idx}>
              {product.title}
            </p>

            <FaChevronCircleLeft
              className="chevron"
              style={
                product.id === selectedProduct?.id
                  ? {
                      transform: "rotate(180deg)",
                      transition: "all 0.2s linear",
                    }
                  : {
                      transition: "all 0.2s linear",
                    }
              }
              onClick={handleRotate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;