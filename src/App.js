import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Display from "./Components/Display";
import axios from "axios";

function App() {
  const [selectedProduct, setSelectedProduct] = useState();
  const productSelectHandler = (id) => {
    console.log({ id });
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setSelectedProduct(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Products
          productSelectHandler={productSelectHandler}
          selectedProduct={selectedProduct}
        />
        <Display selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default App;
