import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const { products, setProducts } = props;
  const { updated, setUpdated } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updated]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>All Products</h2>
      {products &&
        products.map((product, index) => {
          return (
            <div key={index}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
              <Link to={`/products/edit/${product._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={(e) => deleteProduct(product._id)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default ProductsList;
