import React, { useState } from "react";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import ProductsList from "../Components/ProductsList";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);

  return (
    <>
      <ProductForm
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
      <hr />
      <ProductsList
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
    </>
  );
};
export default Main;
